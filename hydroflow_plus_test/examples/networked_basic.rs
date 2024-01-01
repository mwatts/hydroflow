use hydro_deploy::{Deployment, HydroflowCrate};
use hydroflow::futures::SinkExt;
use hydroflow::util::cli::ConnectedSink;
use hydroflow_plus_cli_integration::CLIDeployNodeBuilder;

#[tokio::main]
async fn main() {
    let mut deployment = Deployment::new();
    let localhost = deployment.Localhost();

    let builder = hydroflow_plus::GraphBuilder::new();
    let (source_zero_port, _, _) = hydroflow_plus_test::networked::networked_basic(
        &builder,
        &CLIDeployNodeBuilder::new(|| {
            deployment.add_service(
                HydroflowCrate::new(".", localhost.clone())
                    .bin("networked_basic")
                    .profile("dev"),
            )
        }),
    );

    let port_to_zero = source_zero_port
        .create_sender(&mut deployment, &localhost)
        .await;

    deployment.deploy().await.unwrap();

    let mut conn_to_zero = port_to_zero.connect().await.into_sink();

    deployment.start().await.unwrap();

    for line in std::io::stdin().lines() {
        conn_to_zero.send(line.unwrap().into()).await.unwrap();
    }
}
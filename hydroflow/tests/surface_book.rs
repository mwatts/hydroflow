use hydroflow::assert_graphvis_snapshots;
use multiplatform_test::multiplatform_test;

#[multiplatform_test]
fn test_surface_flows_1() {
    let mut df = hydroflow::hydroflow_syntax! {
        my_tee = source_iter(vec!["Hello", "world"]) -> tee();
        my_tee[0] -> map(|x| x.to_uppercase()) -> [0]my_merge;
        my_tee[1] -> map(|x| x.to_lowercase()) -> [1]my_merge;
        my_merge = merge() -> for_each(|x| println!("{}", x));
    };
    assert_graphvis_snapshots!(df);
    df.run_available();
}

#[tokio::test]
async fn test_source_interval() {
    use std::time::Duration;

    use hydroflow::hydroflow_syntax;

    let mut hf = hydroflow_syntax! {
        source_interval(Duration::from_secs(1))
            -> for_each(|time| println!("This runs every second: {:?}", time));
    };

    // Will print 4 times (fencepost counting).
    tokio::time::timeout(Duration::from_secs_f32(3.5), hf.run_async())
        .await
        .expect_err("Expected time out");
}
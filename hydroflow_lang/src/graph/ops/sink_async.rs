use super::{
    OperatorConstraints, OperatorWriteOutput, WriteContextArgs, WriteIteratorArgs, RANGE_0, RANGE_1,
};

use quote::quote_spanned;

#[hydroflow_internalmacro::operator_docgen]
pub const SINK_ASYNC: OperatorConstraints = OperatorConstraints {
    name: "sink_async",
    hard_range_inn: RANGE_1,
    soft_range_inn: RANGE_1,
    hard_range_out: RANGE_0,
    soft_range_out: RANGE_0,
    ports_inn: None,
    ports_out: None,
    num_args: 1,
    input_delaytype_fn: &|_| None,
    write_fn: &(|wc @ &WriteContextArgs { root, op_span, .. },
                 &WriteIteratorArgs {
                     ident, arguments, ..
                 }| {
        let sink_arg = &arguments[0];

        let send_ident = wc.make_ident("item_send");
        let recv_ident = wc.make_ident("item_recv");

        let write_prologue = quote_spanned! {op_span=>
            let (#send_ident, #recv_ident) = #root::tokio::sync::mpsc::unbounded_channel();
            df
                .spawn_task(async move {
                    use #root::futures::sink::SinkExt;

                    let mut recv = #recv_ident;
                    let mut sink = #sink_arg;
                    while let Some(item) = recv.recv().await {
                        sink.feed(item).await.expect("Error processing async sink item.");
                        // Receive as many items synchronously as possible before flushing.
                        while let Ok(item) = recv.try_recv() {
                            sink.feed(item).await.expect("Error processing async sink item.");
                        }
                        sink.flush().await.expect("Failed to flush async sink.");
                    }
                })
                .expect("sink_async() must be used within a tokio runtime");
        };

        let write_iterator = quote_spanned! {op_span=>
            let #ident = #root::pusherator::for_each::ForEach::new(|item| {
                #send_ident.send(item).expect("Failed to send async write item for processing.");
            });
        };

        OperatorWriteOutput {
            write_prologue,
            write_iterator,
            ..Default::default()
        }
    }),
};
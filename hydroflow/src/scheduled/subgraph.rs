use super::context::Context;

/**
 * Represents a compiled subgraph. Used internally by [Dataflow] to erase the input/output [Handoff] types.
 */
pub(crate) trait Subgraph {
    // TODO: pass in some scheduling info?
    fn run(&mut self, context: &Context);
}
impl<F> Subgraph for F
where
    F: FnMut(&Context),
{
    fn run(&mut self, context: &Context) {
        (self)(context);
    }
}
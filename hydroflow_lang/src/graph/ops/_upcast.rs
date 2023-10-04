use quote::ToTokens;

use super::{FlowPropArgs, OperatorCategory, OperatorConstraints};
use crate::diagnostic::{Diagnostic, Level};
use crate::graph::{FlowProps, LatticeFlowType};

/// TODO(MINGWEI)
pub const _UPCAST: OperatorConstraints = OperatorConstraints {
    name: "_upcast",
    categories: &[OperatorCategory::Map], // TODO(mingwei):?
    num_args: 1,
    flow_prop_fn: Some(
        |fp @ FlowPropArgs {
             op_span, op_inst, ..
         },
         diagnostics| {
            assert_eq!(1, op_inst.input_ports.len());
            assert_eq!(1, op_inst.output_ports.len());

            let out_flow_type = match &*op_inst.arguments[0].to_token_stream().to_string() {
                "Some(LatticeFlowType::Delta)" | "Some(Delta)" => Some(LatticeFlowType::Delta),
                "Some(LatticeFlowType::Cumul)" | "Some(Cumul)" => Some(LatticeFlowType::Cumul),
                "None" => None,
                unexpected => {
                    diagnostics.push(Diagnostic::spanned(
                        op_span,
                        Level::Error,
                        format!(
                            "Unknown value `{}`, expected one of: `{:?}`, `{:?}`, or `None`.",
                            unexpected,
                            Some(LatticeFlowType::Delta),
                            Some(LatticeFlowType::Cumul),
                        ),
                    ));
                    return Err(());
                }
            };
            Ok(vec![Some(FlowProps {
                star_ord: fp.new_star_ord(),
                lattice_flow_type: out_flow_type,
            })])
        },
    ),
    ..super::identity::IDENTITY
};
import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { Approval, Transfer, Transfer1 } from "../generated/LinkERC20/LinkERC20"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt,
  data: Bytes
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return transferEvent
}

export function createTransfer1Event(
  from: Address,
  to: Address,
  value: BigInt
): Transfer1 {
  let transfer1Event = changetype<Transfer1>(newMockEvent())

  transfer1Event.parameters = new Array()

  transfer1Event.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transfer1Event.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transfer1Event.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transfer1Event
}

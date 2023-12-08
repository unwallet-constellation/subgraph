import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  ControllerChanged,
  DefaultResolverChanged,
  OwnershipTransferred,
  ReverseClaimed
} from "../generated/ReverseRegistrarCCIP/ReverseRegistrarCCIP"

export function createControllerChangedEvent(
  controller: Address,
  enabled: boolean
): ControllerChanged {
  let controllerChangedEvent = changetype<ControllerChanged>(newMockEvent())

  controllerChangedEvent.parameters = new Array()

  controllerChangedEvent.parameters.push(
    new ethereum.EventParam(
      "controller",
      ethereum.Value.fromAddress(controller)
    )
  )
  controllerChangedEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return controllerChangedEvent
}

export function createDefaultResolverChangedEvent(
  resolver: Address
): DefaultResolverChanged {
  let defaultResolverChangedEvent = changetype<DefaultResolverChanged>(
    newMockEvent()
  )

  defaultResolverChangedEvent.parameters = new Array()

  defaultResolverChangedEvent.parameters.push(
    new ethereum.EventParam("resolver", ethereum.Value.fromAddress(resolver))
  )

  return defaultResolverChangedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createReverseClaimedEvent(
  addr: Address,
  node: Bytes
): ReverseClaimed {
  let reverseClaimedEvent = changetype<ReverseClaimed>(newMockEvent())

  reverseClaimedEvent.parameters = new Array()

  reverseClaimedEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  reverseClaimedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromFixedBytes(node))
  )

  return reverseClaimedEvent
}

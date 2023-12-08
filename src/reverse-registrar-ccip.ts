import {
  ControllerChanged as ControllerChangedEvent,
  DefaultResolverChanged as DefaultResolverChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ReverseClaimed as ReverseClaimedEvent
} from "../generated/ReverseRegistrarCCIP/ReverseRegistrarCCIP"
import {
  ControllerChanged,
  DefaultResolverChanged,
  OwnershipTransferred,
  ReverseClaimed
} from "../generated/schema"

export function handleControllerChanged(event: ControllerChangedEvent): void {
  let entity = new ControllerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.controller = event.params.controller
  entity.enabled = event.params.enabled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultResolverChanged(
  event: DefaultResolverChangedEvent
): void {
  let entity = new DefaultResolverChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.resolver = event.params.resolver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReverseClaimed(event: ReverseClaimedEvent): void {
  let entity = new ReverseClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.node = event.params.node

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

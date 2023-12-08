import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { ControllerChanged } from "../generated/schema"
import { ControllerChanged as ControllerChangedEvent } from "../generated/ReverseRegistrarCCIP/ReverseRegistrarCCIP"
import { handleControllerChanged } from "../src/reverse-registrar-ccip"
import { createControllerChangedEvent } from "./reverse-registrar-ccip-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let controller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let enabled = "boolean Not implemented"
    let newControllerChangedEvent = createControllerChangedEvent(
      controller,
      enabled
    )
    handleControllerChanged(newControllerChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ControllerChanged created and stored", () => {
    assert.entityCount("ControllerChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ControllerChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "controller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ControllerChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "enabled",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

import { fireEvent, render } from "@testing-library/vue";
import IBUInput from "../NavbarIBUInput.vue";
import { describe, it, expect } from "vitest";

describe("NavbarIBUInput.vue", () => {
  it("should emits 'update:beerIBU' after change", async () => {
    const wrapper = render(IBUInput, {
      props: {
        beerIBU: 0,
        beerIBUType: true,
      },
    });

    const ibuInput = await wrapper.findByTestId("ibuInput-input");

    await fireEvent.input(ibuInput, "12");

    expect(wrapper.emitted()).ownProperty("input");
  });

  it("should emits 'toggle:IBUType' after click IBUType Button", async () => {
    const wrapper = render(IBUInput, {
      props: {
        beerIBU: 2,
        beerIBUType: true,
      },
    });

    const toggleButton = await wrapper.findByTestId("ibuInput-button");

    await fireEvent.click(toggleButton);

    expect(wrapper.emitted()).ownProperty("toggle:IBUType");
  });
});

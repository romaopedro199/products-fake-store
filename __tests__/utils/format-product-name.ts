import { formatProductName } from "@/utils/format-product-name";

describe("formatProductName", () => {
  it("should return the name truncated to 30 characters with ellipsis if name is longer than 30 characters", () => {
    const longName =
      "This is a very long product name that exceeds thirty characters";
    const result = formatProductName(longName);
    expect(result).toBe("This is a very long product na...");
  });
  it("should return the original name if it is less than or equal to 30 characters", () => {
    const shortName = "Short product name";
    const result = formatProductName(shortName);
    expect(result).toBe(shortName);
  });
  it("should return an empty string if the name is empty", () => {
    const emptyName = "";
    const result = formatProductName(emptyName);
    expect(result).toBe("");
  });
});

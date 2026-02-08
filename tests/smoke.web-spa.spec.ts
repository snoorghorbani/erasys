import { test, expect } from "@playwright/test";

test("web-spa profile page renders", async ({ page }) => {
	await page.goto("/profile");
	await expect(page.getByRole("heading", { name: "Profiles" })).toBeVisible();
});

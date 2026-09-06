import { test, expect } from '@playwright/test';

test('User can login with valid credentials', async ({ page }) => {

  // Open OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Enter username
  await page.getByPlaceholder('Username').fill('Admin');

  // Enter password
  await page.getByPlaceholder('Password').fill('admin123');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/dashboard/);
    await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();
});


test('User cannot login with invalid credentials', async ({ page }) => {

  // Open OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Enter username
  await page.getByPlaceholder('Username').fill('Admin');

  // Enter invalid password
  await page.getByPlaceholder('Password').fill('ADMIN6767');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify login failed
  await expect(
    page.getByRole('alert')
  ).toHaveText('Invalid credentials');

  // Verify user remains on login page
  await expect(page).toHaveURL(/auth\/login/);
});
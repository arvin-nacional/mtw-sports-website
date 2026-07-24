import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:3000'

test.describe('Frontend - Homepage', () => {
  test('loads homepage with correct title', async ({ page }) => {
    await page.goto(BASE_URL)
    await expect(page).toHaveTitle(/MTW Sports/)
  })

  test('displays logo in header', async ({ page }) => {
    await page.goto(BASE_URL)
    const logo = page.locator('header img[alt="MTW Sports"]')
    await expect(logo).toBeVisible()
  })

  test('navigation links are visible on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto(BASE_URL)
    const nav = page.locator('header nav').first()
    await expect(nav).toBeVisible()
  })

  test('mobile menu button appears on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto(BASE_URL)
    const menuButton = page.locator('header button[aria-label="Open menu"]')
    await expect(menuButton).toBeVisible()
  })

  test('mobile menu opens when clicked', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto(BASE_URL)
    const menuButton = page.locator('header button[aria-label="Open menu"]')
    await menuButton.click()
    const closeButton = page.locator('header button[aria-label="Close menu"]')
    await expect(closeButton).toBeVisible()
  })
})

test.describe('Frontend - Navigation', () => {
  test('can navigate to About page', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.click('a:has-text("About")')
    await expect(page).toHaveURL(/about/)
  })

  test('can navigate to Solutions page', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.click('a:has-text("Solutions")')
    await expect(page).toHaveURL(/solutions/)
  })

  test('can navigate to Contact page', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.click('a:has-text("Contact")')
    await expect(page).toHaveURL(/contact/)
  })
})

test.describe('Frontend - Footer', () => {
  test('footer is visible', async ({ page }) => {
    await page.goto(BASE_URL)
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })

  test('footer contains logo', async ({ page }) => {
    await page.goto(BASE_URL)
    const footerLogo = page.locator('footer img[alt="MTW Sports"]')
    await expect(footerLogo).toBeVisible()
  })
})

test.describe('Frontend - SEO & Meta', () => {
  test('has correct OG meta tags', async ({ page }) => {
    await page.goto(BASE_URL)
    const ogTitle = page.locator('meta[property="og:title"]')
    await expect(ogTitle).toHaveAttribute('content', /MTW Sports/)
  })

  test('has OG image defined', async ({ page }) => {
    await page.goto(BASE_URL)
    const ogImage = page.locator('meta[property="og:image"]')
    await expect(ogImage).toHaveAttribute('content', /website-template-OG/)
  })
})

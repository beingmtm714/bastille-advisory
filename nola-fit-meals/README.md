# NOLA Fit Meals — Website Owner Guide

Welcome! This guide walks you through everything you need to do to get your website live and keep it running. **You do not need to know how to code.** Every update you'll ever need to make happens through Google Sheets or a simple text edit.

---

## What You'll Need (all free)

- A **Google account** (for Google Sheets)
- A **Tally.so account** (free — for the order form)
- A **Vercel account** (free — for hosting the website)

---

## Step 1 — Set Up Your Menu Google Sheet

Your menu lives in a Google Sheet. The website reads it automatically — no rebuilding needed.

### Create the Sheet

1. Go to **Google Sheets** (sheets.google.com) and create a new spreadsheet.
2. Name it something like **"NOLA Fit Meals — Menu"**.
3. In **Row 1**, type these column headers exactly (copy/paste is fine):

   | A | B | C | D | E | F | G | H | I | J |
   |---|---|---|---|---|---|---|---|---|---|
   | Meal Name | Description | Protein (g) | Carbs (g) | Fat (g) | Calories | Price | Category | Photo URL | Available |

4. Starting in **Row 2**, add your meals. One row = one meal.
   - **Available**: Type `YES` if the meal is on the menu this week, or `NO` to hide it.
   - **Photo URL**: Paste a direct image link (optional). Leave blank if you don't have one.
   - **Category**: Use a name like `Plates`, `Bowls`, `Burritos & Wraps`, etc. Meals with the same category will group together.

### Publish the Sheet as a Public CSV Link

1. In Google Sheets, click **File → Share → Publish to web**.
2. Under "Link", change the first dropdown from "Entire Document" to **"Sheet1"** (or your sheet name).
3. Change the second dropdown from "Web page" to **"Comma-separated values (.csv)"**.
4. Click **Publish**, then click **OK** when prompted.
5. Copy the long URL it shows you — it will look like:
   ```
   https://docs.google.com/spreadsheets/d/XXXXXXXXX/pub?gid=0&single=true&output=csv
   ```
6. **Save this URL** — you'll need it in Step 3.

### Updating the Menu Each Week

To change the menu, just open the Google Sheet and:
- Change `YES` to `NO` (or delete a row) to remove a meal.
- Add a new row with `YES` in the Available column to add a meal.
- **That's it.** The website updates instantly — no need to touch the website.

---

## Step 2 — Set Up Your Tally Order Form

Tally is a free form builder. Orders submitted by customers go straight to a Google Sheet you control.

### Create the Form

1. Go to **tally.so** and sign up for a free account.
2. Click **New form** and name it "NOLA Fit Meals Order".
3. Add these fields in order:
   - **Full Name** — Short text, required
   - **Phone Number** — Short text, required
   - **Email** — Email field, required
   - **Pickup or Delivery?** — Multiple choice: `Pickup` / `Delivery`, required
   - **Delivery Address** — Short text, shown only when "Delivery" is selected (use Tally's "Show if" condition)
   - **Order Details** — Long text, label it: *"List each meal and quantity (e.g. Garlic Parmesan Chicken x2)"*, required
   - **Special Instructions** — Long text, optional
   - **How did you hear about us?** — Multiple choice: `Instagram` / `Friend` / `Other`
4. Click **Publish** when done.
5. Your form URL will look like: `https://tally.so/r/abc123`
   - The part after `/r/` is your **Form ID** (e.g., `abc123`). **Save this.**

### Connect Tally to Google Sheets

1. Inside Tally, go to your form → **Integrations** → **Google Sheets**.
2. Connect your Google account and select the spreadsheet where orders should go (create a new one called "NOLA Fit Meals — Orders").
3. Map each form field to a column. Click **Save**.

Now every order submitted on your website will appear as a new row in that spreadsheet automatically.

---

## Step 3 — Deploy on Vercel

Vercel hosts your website for free.

### Connect Your Repository

1. Go to **vercel.com** and sign up with your GitHub account.
2. Click **Add New → Project**.
3. Find and select the **nola-fit-meals** repository and click **Import**.
4. Under **Root Directory**, type `nola-fit-meals` (so Vercel looks in the right folder).
5. Leave everything else as-is. Click **Deploy**.

### Enter Your Two Settings

After the first deploy (or before — Vercel will redeploy automatically):

1. In Vercel, go to your project → **Settings → Environment Variables**.
2. Add these two variables:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_MENU_SHEET_URL` | The CSV link you copied in Step 1 |
   | `NEXT_PUBLIC_TALLY_FORM_ID` | Your Tally Form ID (e.g., `abc123`) |

3. Click **Save** for each one.
4. Go to **Deployments** and click **Redeploy** on the latest deployment so the new settings take effect.

Your site is now live! Vercel gives you a free URL like `nola-fit-meals.vercel.app`. You can also connect a custom domain (e.g., `nolafitmeals.com`) in Vercel's **Domains** settings.

---

## Step 4 — Updating the Menu (Week to Week)

Every Monday, here's your workflow:

1. Open your **Menu Google Sheet**.
2. Change `YES` → `NO` for any meals you're removing.
3. Add new rows for new meals with `YES` in the Available column.
4. Done! The website updates automatically within seconds.

You do **not** need to log into Vercel, touch any code, or do anything else.

---

## Step 5 — Updating Text on the FAQ Page

If you need to change your pickup address, delivery fee, delivery area, or order cutoff time, here's how:

1. Open the file: `nola-fit-meals/app/faq/page.tsx`
2. Look for the section near the top that says `export const faqs = [`
3. Find the question you want to update (e.g., "Where do I pick up my order?")
4. Change the text inside the `answer:` field — only edit the text between the quote marks.
5. Save the file and push it to GitHub. Vercel will automatically redeploy with the new text in about 1 minute.

Example — to change the pickup address, find this section:
```
{
  question: "Where do I pick up my order?",
  answer:
    "📍 [OWNER: ADD YOUR PICKUP ADDRESS HERE ...]",
},
```
And change the answer to your real address, e.g.:
```
  answer:
    "📍 1234 Airline Dr, Metairie, LA 70001. Pull up to the front door and text when you arrive. Pickup window is Monday 11am–2pm.",
```

---

## Troubleshooting

**Menu not showing up on the website?**
- Make sure the Google Sheet is published to web (Step 1).
- Check that the CSV URL is correctly pasted into Vercel's Environment Variables.
- Make sure at least one row has `YES` in the Available column.

**Order form not appearing?**
- Make sure your Tally Form ID is correctly entered in Vercel's Environment Variables (just the ID, not the full URL).
- The form shows a placeholder message until the ID is configured — this is normal.

**Website looks broken after editing a file?**
- Double-check that you only changed the text inside the quote marks and didn't accidentally delete a comma or bracket.

---

## Quick Reference

| Task | Where to do it |
|------|---------------|
| Update the weekly menu | Google Sheet (Menu) |
| View orders | Google Sheet (Orders) |
| Change pickup address / delivery info | `app/faq/page.tsx` — `answer:` field |
| Change the Tally form | Tally.so dashboard |
| Change the menu sheet URL | Vercel → Settings → Environment Variables |

---

*Site built with Next.js 14 + Tailwind CSS. Hosted on Vercel.*

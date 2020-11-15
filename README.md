# 🟣 santi.live ![Deploy to Cloudflare Worker](https://github.com/SantiMA10/santi.live/workflows/Deploy%20to%20Cloudflare%20Worker/badge.svg)

A Cloudflare Worker to redirect https://santi.live to my twitch page

## Dev

### Setup 

```bash
yarn install
```

### Run dev mode

Copy the `wrangler.example.toml` to `wrangler.toml` and add your own `account_id` and `zone_id`

```bash
yarn dev
```
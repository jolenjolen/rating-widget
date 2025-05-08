# ⭐ Rating Widget System (PHP + JS)

This project is a modular 5-star rating system built using **vanilla JavaScript**, **Bootstrap 5**, and **PHP**. It supports modal-based user feedback and dynamically fetches a review submission URL using `data-*` attributes.

## 📦 Features

- Responsive 5-star rating UI.
- Modal popup for both high (4–5 stars) and low (1–3 stars) ratings.
- PHP-powered `data-review-url` for dynamic review redirection.
- Easy embedding with just one HTML line and one JS script.
- Built-in Bootstrap and Google Fonts support (auto-loaded).
- Ready for integration into static or dynamic websites.
- Modular structure for storing and retrieving reviews.

---

## 🔧 How It Works

### Download the Above Files And Embed the Widget

In your PHP page:

```php
<div id="rating-widget-container" data-review-url="<?= htmlspecialchars('YOUR-GOOGLE-MAPS-REVIEW-LINK') ?>"></div>
<script src="rating-widget.js"></script>
```

## OR 

### Embed the Widget Without Any Installation

In your PHP page:

```php
<div id="rating-widget-container" data-review-url="<?= htmlspecialchars('YOUR-GOOGLE-MAPS-REVIEW-LINK') ?>"></div>
<script src="https://jolenjolen.github.io/rating-widget/rating-widget.js"></script>
```

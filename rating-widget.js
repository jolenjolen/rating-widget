(function () {
    // 1. Load Bootstrap and Google Fonts dynamically (if not already loaded)
    const loadScript = (src) => {
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        document.head.appendChild(s);
    };
    const loadCSS = (href) => {
        const l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = href;
        document.head.appendChild(l);
    };

    loadCSS("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
    loadCSS("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");

    // 2. Wait for DOM to load
    document.addEventListener("DOMContentLoaded", () => {
        const container = document.getElementById("rating-widget-container");
        if (!container) return;
        const reviewUrl = container.dataset.reviewUrl || "https://google.com";
        const username = container.dataset.username || "anonymous";
        const email = container.dataset.email || "unknown@example.com";
        // 3. Inject HTML
        container.innerHTML = `
            <style>
                .material-symbols-rounded {
                    cursor: pointer;
                    color: rgb(255, 202, 69);
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
                .star-yes {
                    font-variation-settings:
                        'FILL' 1;
                }
                a {
                    text-decoration: none;
                }
            </style>
            <div class="container text-center" style="width: 400px;">
                <a data-bs-toggle="modal" data-bs-target="#myModal" class="material-symbols-rounded s1 star">grade</a>
                <a data-bs-toggle="modal" data-bs-target="#myModal" class="material-symbols-rounded s2 star">grade</a>
                <a data-bs-toggle="modal" data-bs-target="#myModal" class="material-symbols-rounded s3 star">grade</a>
                <a data-bs-toggle="modal" data-bs-target="#myModal2" class="material-symbols-rounded s4 star">grade</a>
                <a data-bs-toggle="modal" data-bs-target="#myModal2" class="material-symbols-rounded s5 star">grade</a>
            </div>

            <!-- Modal for 1–3 stars -->
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title">Tell us about your experience</h6>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form action="http://gateofgoa.com/review/review.php" method="POST">
                                <div class="mb-3 mt-3">
                                    <input type="hidden" name="username" value="${username}">
                                    <input type="hidden" name="email" value="${email}">
                                    <input type="hidden" name="rating" class="rating-value" value="0">

                                    <label for="comment">Comments:</label>
                                    <textarea class="form-control" rows="5" id="text" name="text" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-dark w-100">Submit</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <p style="font-size:12px;">We sincerely apologize for any dissatisfaction you may have experienced with our product/service. Your satisfaction is of utmost importance to us. We will be reaching out to you shortly to resolve the issue. Thank you for your feedback.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal for 4–5 stars -->
            <div class="modal" id="myModal2">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title">Tell us about your experience</h6>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form action="http://gateofgoa.com/review/review.php" method="POST">
                                <div class="mb-3 mt-3">
                                    <input type="hidden" name="username" value="${username}">
                                    <input type="hidden" name="email" value="${email}">
                                    <input type="hidden" name="rating" class="rating-value" value="0">

                                    <label for="comment">Comments:</label>
                                    <textarea class="form-control" rows="5" id="text" name="text" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-dark w-100">Submit</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <p style="font-size:12px;">We're incredibly grateful for your high rating! Your support means the world to us. Please consider leaving a review on Google. Thank you once again!</p>
                            <a href="${reviewUrl}" class="btn btn-dark d-flex flex-wrap align-items-center"><img src="https://raw.githubusercontent.com/jolenjolen/rating-widget/refs/heads/main/search.png" style="width:25px; height:25px;">&nbsp;&nbsp;Write a review</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // 4. Add JS interaction
        const stars = container.querySelectorAll(".star");
        let selectedRating = 0;
        stars.forEach((star, i) => {
            star.addEventListener("mouseover", () => {
                stars.forEach((s, j) => {
                    if (j <= i) s.classList.add("star-yes");
                    else s.classList.remove("star-yes");
                });
            });

            star.addEventListener("mouseout", () => {
                stars.forEach((s) => s.classList.remove("star-yes"));
            });
            star.addEventListener("click", () => {
                selectedRating = i + 1;
                const ratingInputs = container.querySelectorAll(".rating-value");
                ratingInputs.forEach(input => input.value = selectedRating);

            });
        });
    });
})();

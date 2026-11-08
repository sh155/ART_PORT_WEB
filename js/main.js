//Interactive inquiry form script box
// Set dynamic current year
        const currentYear = new Date().getFullYear();
        document.getElementById('year').textContent = currentYear;
        document.getElementById('footer-year').textContent = currentYear;

        // Toggle dynamic question field in inquiry form
        function toggleQuestionBox(value) {
            const questionGroup = document.getElementById('question-box-group');
            if (value === 'Question') {
                questionGroup.style.display = 'block';
            } else {
                questionGroup.style.display = 'none';
            }
        }

        // Lightbox Functions
        function openLightbox(imageSrc, title, meta) {
            document.getElementById('lightbox-img').src = imageSrc;
            document.getElementById('lightbox-title').textContent = title;
            document.getElementById('lightbox-meta').textContent = meta;
            document.getElementById('lightbox').style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Stop background scrolling
        }

        function closeLightbox(event) {
            // Close if clicking outside the image content
            if (event.target.id === 'lightbox' || event.target.id === 'lightbox-img') {
                forceCloseLightbox();
            }
        }

        function forceCloseLightbox() {
            document.getElementById('lightbox').style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore background scrolling
        }

        // Close Lightbox on Pressing Escape Key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                forceCloseLightbox();
            }
        });

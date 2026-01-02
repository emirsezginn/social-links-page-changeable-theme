 document.addEventListener('DOMContentLoaded', function() {
            const popup = document.getElementById('popup');
            const popupLink = document.getElementById('popup-link');
            const copyBtn = document.getElementById('copy-btn');
            const closePopup = document.querySelector('.close-popup');
            const themeBtn = document.querySelector('.theme-btn');
            const themeOptions = document.querySelector('.theme-options');
            const themeOptionsList = document.querySelectorAll('.theme-option');
            
            // Sample links for demonstration
            const socialLinks = {
                'linkedin': 'https://www.linkedin.com/in/emirhan-sezgin',
                'github': 'https://github.com/emirsezginn',
                'upwork': 'https://www.upwork.com/freelancers/~0162e4a5a43c87459f',
                'bionluk': 'https://bionluk.com/emirsezgn',
                'portfolio': 'https://emirsezgin.netlify.app/',
                'logbook': 'https://logbookapplication.netlify.app/'

            };
            
            // Theme switching functionality
            themeBtn.addEventListener('click', function() {
                themeOptions.classList.toggle('active');
            });
            
            themeOptionsList.forEach(option => {
                option.addEventListener('click', function() {
                    const theme = this.getAttribute('data-theme');
                    
                    // Remove all theme classes
                    document.body.className = '';
                    // Add selected theme class
                    document.body.classList.add(`theme-${theme}`);
                    
                    // Update active state
                    themeOptionsList.forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Close theme options
                    themeOptions.classList.remove('active');
                });
            });
            
            // Close theme options when clicking outside
            document.addEventListener('click', function(e) {
                if (!themeBtn.contains(e.target) && !themeOptions.contains(e.target)) {
                    themeOptions.classList.remove('active');
                }
            });
            
            // Add click event to all copy icons
            document.querySelectorAll('.copy-icon').forEach(icon => {
                icon.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Find which social platform this is for
                    const socialItem = this.closest('.social-link');
                    const socialName = socialItem.querySelector('.social-name').textContent.toLowerCase();
                    
                    // Set the link in the popup
                    popupLink.textContent = socialLinks[socialName];
                    
                    // Show the popup
                    popup.classList.add('active');
                    
                    // Reset copy button text
                    copyBtn.textContent = 'Copy Link';
                    copyBtn.classList.remove('copied');
                });
            });
            
            // Close popup when clicking on close button
            closePopup.addEventListener('click', function() {
                popup.classList.remove('active');
            });
            
            // Close popup when clicking outside of popup content
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    popup.classList.remove('active');
                }
            });
            
            // Copy link to clipboard
            copyBtn.addEventListener('click', function() {
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = popupLink.textContent;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);
                
                this.textContent = 'Copied!';
                this.classList.add('copied');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    this.textContent = 'Copy Link';
                    this.classList.remove('copied');
                }, 2000);
            });
            
            // Close popup with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && popup.classList.contains('active')) {
                    popup.classList.remove('active');
                }
            });
        });
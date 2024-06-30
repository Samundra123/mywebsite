document.addEventListener('DOMContentLoaded', () => {
    const progressList = document.getElementById('progress-list');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const congratsMessage = document.getElementById('congrats-message');
    let checkedCount = 0;

    for (let i = 1; i <= 100; i++) {
        const progressItem = document.createElement('div');
        progressItem.classList.add('progress-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${i}`;

        const label = document.createElement('label');
        label.htmlFor = `checkbox-${i}`;
        label.textContent = i;

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                checkedCount++;
            } else {
                checkedCount--;
            }
            updateProgressBar();
        });

        progressItem.appendChild(checkbox);
        progressItem.appendChild(label);
        progressList.appendChild(progressItem);
    }

    function updateProgressBar() {
        const progress = (checkedCount / 100) * 100;
        progressBarFill.style.width = `${progress}%`;

        if (checkedCount === 100) {
            congratsMessage.textContent = "Congratulations! You've completed all tasks!";
            congratsMessage.style.display = 'block';
        } else {
            congratsMessage.style.display = 'none';
        }
    }
});

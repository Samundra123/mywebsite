document.addEventListener('DOMContentLoaded', () => {
    const progressList = document.getElementById('progress-list');

    for (let i = 1; i <= 100; i++) {
        const progressItem = document.createElement('div');
        progressItem.classList.add('progress-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${i}`;

        const label = document.createElement('label');
        label.htmlFor = `checkbox-${i}`;
        label.textContent = i;

        progressItem.appendChild(checkbox);
        progressItem.appendChild(label);
        progressList.appendChild(progressItem);
    }
});

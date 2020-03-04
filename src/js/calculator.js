import { openAccordeon, closeAccordeon } from './accordeons';

export default function() {
    const calculators = Array.from(document.querySelectorAll('.js-calculator'));

    calculators.forEach(calculator => {
        const selectionGroups = Array.from(calculator.querySelectorAll('.calculator__selection-group'));

        selectionGroups.forEach(group => {
            const btn = group.querySelector('.calculator__selection-group-btn');
            const content = group.querySelector('.calculator__selection-group-content');
            const actionText = group.querySelector('.calculator__selection-group-btn-action-text');
            btn.addEventListener('click', event => {
                event.preventDefault();
                if (group.classList.contains('open')) {
                    closeAccordeon(content);
                    group.classList.remove('open');
                    actionText.textContent = 'Добавить';
                } else {
                    openAccordeon(content);
                    group.classList.add('open');
                    actionText.textContent = 'Удалить';
                }
            })
        });
    });
}

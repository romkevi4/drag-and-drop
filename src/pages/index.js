import { item, placeholders } from '../utils/constants.js';

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(evt) {
    evt.target.classList.add('page__item_state_hold');
    setTimeout(() => evt.target.classList.add('page__item_state_hide'), 0);
}

function dragend(evt) {
    evt.target.classList.remove('page__item_state_hold', 'page__item_state_hide');
}

function dragover(evt) {
    evt.preventDefault();
}

function dragenter(evt) {
    evt.target.classList.add('page__placeholder_state_hovered');
}

function dragleave(evt) {
    evt.target.classList.remove('page__placeholder_state_hovered');
}

function dragdrop(evt) {
    evt.target.classList.remove('page__placeholder_state_hovered');
    evt.target.append(item);
}
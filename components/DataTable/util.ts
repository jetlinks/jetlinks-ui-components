import Sortable from 'sortablejs';
export const draggableClassName = 'draggable-item';
export const sortTableHandle = (
    onEnd: (oldIndex: number, newIndex: number) => void,
) => {
    const ele = document.querySelector('.draggable-body tbody');
    console.log(ele);
    const sortTable = new Sortable(ele as HTMLElement, {
        handle: `.${draggableClassName}`,
        draggable: '.ant-table-row',
        animation: 200,
        ghostClass: 'draggable-ghost',
        sort: true,
        onEnd: ({ oldIndex, newIndex }) => {
            onEnd(oldIndex, newIndex);
        },
    });

    return sortTable;
};

let myCheckedIndexes = [];

export const getItems = (checkedIndexes) => {
    myCheckedIndexes = checkedIndexes;
};

export const deleteItems = (checkedIndexes) => {
    const row = document.querySelector("table");

    for (let i = 0; i < checkedIndexes.length; i++) {
        if (row) {
            row.remove();
        }
    }
    return checkedIndexes = [];
};

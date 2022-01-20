export function nextAndPrevious () {
  if (arrow === "next") {
    const next = item.id + 1 > arrImg.length ? 1 : modalItem.id + 1;
    handleItemActiveModal(next);
  } else {
    const prev = modalItem.id - 1 < 1 ? arrImg.length : modalItem.id - 1;
    handleItemActiveModal(prev);
  }
}

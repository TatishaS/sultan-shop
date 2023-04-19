import React, { FC } from "react";
import { AddNewItemForm, IOption } from "../types";
import { selectOptions } from "../pages/AdminPanel";
import Select, { OnChangeValue } from "react-select";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { editAdminItem } from "../redux/admin/slice";

type EditModalProps = {
  editId: number;
  handleShowModal: (status: boolean) => void;
};

const EditModal: FC<EditModalProps> = ({ editId, handleShowModal }) => {
  const dispatch = useAppDispatch();
  const [editFormData, setEditFormData] = React.useState<AddNewItemForm>({
    id: 0,
    imageUrl: "",
    title: "",
    sizeType: "weight",
    size: "",
    barcode: "",
    price: 0,
    producer: "",
    brand: "",
    description: "",
    category: [],
  });

  const { adminItems } = useAppSelector((state) => state.admin);
  const editedProduct = adminItems.find((item) => item.id === editId);

  React.useEffect(() => {
    if (editedProduct) {
      const formInitialValues = {
        id: editedProduct?.id,
        imageUrl: editedProduct?.imageUrl,
        title: editedProduct?.title,
        sizeType: editedProduct?.sizeType,
        size: editedProduct?.size,
        barcode: editedProduct?.barcode,
        price: editedProduct?.price,
        producer: editedProduct?.producer,
        brand: editedProduct?.brand,
        description: editedProduct?.description,
        category: editedProduct?.category,
      };

      setEditFormData(formInitialValues);
    }
  }, []);

  /* Handling form fields */

  const getSelectValue = () => {
    if (editFormData.category) {
      return selectOptions.filter(
        (opt) => editFormData.category.indexOf(opt.value) >= 0
      );
    } else {
      return [];
    }
  };

  const isRadioSelected = (value: string): boolean =>
    editFormData.sizeType === value;

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditFormData({
      ...editFormData,
      sizeType: event.currentTarget.value,
    });
  };

  const handleChangeSelect = (newValue: OnChangeValue<IOption, boolean>) => {
    setEditFormData({
      ...editFormData,
      category: (newValue as IOption[]).map((option) => option.value),
    });
  };

  const handleEditFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  /* Saving edited product */

  const handleClickSaveItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      editFormData.title &&
      editFormData.imageUrl &&
      editFormData.size &&
      editFormData.barcode &&
      editFormData.price &&
      editFormData.producer &&
      editFormData.brand &&
      editFormData.category &&
      editFormData.description
    ) {
      const editedItem = {
        id: editId,
        title: editFormData.title,
        imageUrl: editFormData.imageUrl,
        sizeType: editFormData.sizeType,
        size: editFormData.size,
        barcode: editFormData.barcode,
        price: editFormData.price,
        producer: editFormData.producer,
        brand: editFormData.brand,
        description: editFormData.description,
        category: editFormData.category,
      };

      try {
        dispatch(editAdminItem(editedItem));
        handleShowModal(false);
      } catch (error) {
        console.error(error);
        alert("ОШИБКА ПРИ ОБНОВЛЕНИИ ДАННЫХ" + error);
      }

      setEditFormData({
        id: 0,
        title: "",
        imageUrl: "",
        sizeType: "weight",
        size: "",
        barcode: "",
        price: 0,
        producer: "",
        brand: "",
        description: "",
        category: [],
      });
    } else {
      alert("Заполните все поля");
    }
  };

  return (
    <>
      <div className="modal-overlay modal-overlay--show"></div>
      <section className="modal modal--edit modal--show">
        <button
          className="modal__close-btn"
          onClick={() => handleShowModal(false)}
        ></button>
        <div className="modal__inner">
          <form
            className="catalog__edit-form edit-form"
            onSubmit={handleClickSaveItem}
          >
            <label className="edit-form__label" htmlFor="title">
              Название:
            </label>
            <input
              className="edit-form__input"
              type="text"
              name="title"
              id="title"
              value={editFormData.title}
              onChange={handleEditFormChange}
            />

            <label className="edit-form__label" htmlFor="imageUrl">
              Ссылка на изображение товара:
            </label>
            <input
              className="edit-form__input"
              type="text"
              name="imageUrl"
              id="imageUrl"
              value={editFormData.imageUrl}
              onChange={handleEditFormChange}
            />

            <fieldset className="edit-form__fieldset">
              <p className="edit-form__title">Тип упаковки:</p>
              <ul className="edit-form__list-radio">
                <li>
                  <input
                    type="radio"
                    name="sizeType"
                    id="weight"
                    value="weight"
                    onChange={handleChangeRadio}
                    checked={isRadioSelected("weight")}
                  />
                  <label htmlFor="weight">Weight</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="sizeType"
                    id="volume"
                    value="volume"
                    onChange={handleChangeRadio}
                    checked={isRadioSelected("volume")}
                  />
                  <label htmlFor="volume">Volume</label>
                </li>
              </ul>
            </fieldset>

            <label className="edit-form__label " htmlFor="size">
              Вес или объем:
            </label>
            <input
              className="edit-form__input edit-form__input--weight"
              type="text"
              name="size"
              id="size"
              value={editFormData.size}
              onChange={handleEditFormChange}
            />

            <label className="edit-form__label" htmlFor="barcode">
              Штрихкод:
            </label>
            <input
              className="edit-form__input"
              type="text"
              name="barcode"
              id="barcode"
              value={editFormData.barcode}
              onChange={handleEditFormChange}
            />

            <label className="edit-form__label" htmlFor="price">
              Цена:
            </label>
            <input
              className="edit-form__input edit-form__input--price"
              type="text"
              name="price"
              id="price"
              value={editFormData.price}
              onChange={handleEditFormChange}
            />

            <label className="edit-form__label" htmlFor="producer">
              Производитель:
            </label>
            <input
              className="edit-form__input"
              type="text"
              name="producer"
              id="producer"
              value={editFormData.producer}
              onChange={handleEditFormChange}
            />

            <label className="edit-form__label" htmlFor="brand">
              Бренд:
            </label>
            <input
              className="edit-form__input"
              type="text"
              name="brand"
              id="brand"
              value={editFormData.brand}
              onChange={handleEditFormChange}
            />

            <Select
              className="edit-form__select"
              options={selectOptions}
              isMulti
              placeholder="Категория товара..."
              name="category"
              value={getSelectValue()}
              onChange={handleChangeSelect}
            />

            <label className="edit-form__textarea-label" htmlFor="description">
              Описание товара:
            </label>

            <textarea
              placeholder="Описание..."
              name="description"
              className="edit-form__textarea"
              rows={8}
              id="description"
              value={editFormData.description}
              onChange={handleEditFormChange}
            ></textarea>
            <button className="edit-form__btn btn" type="submit">
              Сохранить изменения
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditModal;

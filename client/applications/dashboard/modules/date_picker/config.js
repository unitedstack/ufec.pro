import __ from 'client/locale/dashboard.lang.json';

export default {
  title: __.date_picker_title,
  description: __.date_picker_description,
  link: 'https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/data_picker',
  conf: {
    showTime: true,
    decorator: {
      id: 'datePicker',
      onChange: (value) => {
        window.alert(`You have chosen date of ${value}`);
      }
    }
  }
};
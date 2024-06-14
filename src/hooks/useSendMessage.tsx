import {useFormik} from 'formik';
import {Keyboard} from 'react-native';
import {SendMessageFormType} from '../utils/schemaTypes';
import {sendMessageSchema} from '../utils/validationsSchema';
import useNavigationHook from './useNavigationHook';
import useRouteHook from './useRouteHook';
import useHelper from './useHelper';

const useSendMessage = () => {
  const {goBackWithAlert} = useNavigationHook();
  const {goToWhatsapp} = useHelper();
  const {vendorPhone} = useRouteHook({screenName: 'SendMessage'}).params;

  const form = useFormik<SendMessageFormType>({
    initialValues: {
      name: global.userInfo.name,
      phone: global.userInfo.phone,
      email: '',
      date: '',
      details: '',
    },
    validationSchema: sendMessageSchema,
    onSubmit: async values => {
      Keyboard.dismiss();
      const message = `name: ${values.name}\nphone: ${values.phone}\ndate: ${
        values.date
      }\nemail: ${values.email ? values.email : 'nil'}\ndetails: ${
        values.details
      }`;
      goToWhatsapp("03030502620", message); // TODO: remove this number after testing.
    },
  });

  return {
    form,
    goBackWithAlert,
  };
};

export default useSendMessage;

import {useFormik} from 'formik';
import {Keyboard} from 'react-native';
import {SendMessageFormType} from '../utils/schemaTypes';
import {sendMessageSchema} from '../utils/validationsSchema';
import useNavigationHook from './useNavigationHook';
import useRouteHook from './useRouteHook';
import useHelper from './useHelper';
import {useLeads} from '.';

const useSendMessage = () => {
  const {goBackWithAlert} = useNavigationHook();
  const {goToWhatsapp} = useHelper();
  const {onSendLeads, isLoading} = useLeads();
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
      const body = {
        user_id: global.userInfo.id,
        vendor_id: 1,
        leads_contact_type: 'message',
        phone: vendorPhone,
        // name: values.name,
        // email: values.email,
        // details: values.details,
        // lead_date: values.date,
      };
      onSendLeads(body);
      goToWhatsapp(vendorPhone, message);
    },
  });

  return {
    form,
    goBackWithAlert,
    isLoading: isLoading,
  };
};

export default useSendMessage;

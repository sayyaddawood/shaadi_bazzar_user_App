import {useFormik} from 'formik';
import {Keyboard} from 'react-native';
import {SendMessageFormType} from '../utils/schemaTypes';
import {sendMessageSchema} from '../utils/validationsSchema';
import useNavigationHook from './useNavigationHook';
import useRouteHook from './useRouteHook';
import useHelper from './useHelper';
import {useMutation} from '@tanstack/react-query';
import {onSubmitLeads} from '../network/serverRequests';
import Toast from 'react-native-toast-message';

const useSendMessage = () => {
  const {goBackWithAlert} = useNavigationHook();
  const {goToWhatsapp} = useHelper();
  const {vendorPhone} = useRouteHook({screenName: 'SendMessage'}).params;

  const {mutateAsync, isPending} = useMutation({
    mutationFn: onSubmitLeads,
    onSuccess: response => {
      console.log(response);
    },
    onError: error => {
      console.error('Error posting data:', error);
    },
  });

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
        // phone: vendorPhone,
        // name: values.name,
        // email: values.email,
        // details: values.details,
        // lead_date: values.date,
      };
      mutateAsync(body);
      goToWhatsapp('03030502620', message); // TODO: remove this number after testing.
    },
  });

  return {
    form,
    goBackWithAlert,
    onSendLeads: mutateAsync,
    isLoading: isPending,
  };
};

export default useSendMessage;

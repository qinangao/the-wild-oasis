import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isPending,
    settings: {
      breakfastPrice,
      maxBookingLength,
      maxGuestsPerBooking,
      minBookingLength,
    } = {},
  } = useSettings();

  const { updateSetting, isUpdating } = useUpdateSetting();

  if (isPending) return <Spinner />;

  function handleUpdate(e) {
    const { value, id, defaultValue } = e.target;

    if (!value || !id || defaultValue === value) return;

    updateSetting({ [id]: value });
    e.target.defaultValue = value;
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          defaultValue={minBookingLength}
          type="number"
          id="minBookingLength"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e)}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          defaultValue={maxGuestsPerBooking}
          type="number"
          id="maxGuestsPerBooking"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e)}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          type="number"
          id="maxBookingLength"
          onBlur={(e) => handleUpdate(e)}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          type="number"
          id="breakfastPrice"
          onBlur={(e) => handleUpdate(e)}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

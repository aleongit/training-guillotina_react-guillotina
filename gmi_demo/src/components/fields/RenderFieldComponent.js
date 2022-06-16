import { DownloadField, RenderField } from "@guillotinaweb/react-gmi";

const DEFAULT_VALUE_EDITABLE_FIELD = 'Click to edit'
const DEFAULT_VALUE_NO_EDITABLE_FIELD = ' -- '

const RenderRichText = ({ value }) => <div dangerouslySetInnerHTML={{ __html: value }}></div>
export function RenderFieldComponent({ schema, field, val, modifyContent }) {
  const getRenderProps = () => {
    const renderProps = {
      value:
        val ??
        (modifyContent
          ? DEFAULT_VALUE_EDITABLE_FIELD
          : DEFAULT_VALUE_NO_EDITABLE_FIELD),
    }
    if (val && schema?.widget === 'file') {
      renderProps['value'] = {
        data: val,
        field: field,
      }
      renderProps['Widget'] = DownloadField
    } else if (schema?.type === 'boolean') {
      renderProps['value'] = val?.toString() ?? renderProps['value']
    } else if (val && schema?.type === 'datetime') {
      renderProps['value'] = new Date(val).toLocaleString()
    } else if (schema?.widget === "textarea" || schema?.widget === "richtext") {
      renderProps['Widget'] = RenderRichText
    } 
    return renderProps
  }

  return <RenderField {...getRenderProps()} />
}
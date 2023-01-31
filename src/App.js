import "./styles.css";

const KEY = "2db51657-d7e8-43b1-afba-5dd9efb7d509";

export default function App() {
  const handleCancel = () => console.log("CANCELLED");

  const handleSuccess = (files) => console.log("SUCCESS: ", files);

  const handleError = (err) => console.log("ERROR: ", err);

  var launchOneDrivePicker = function (
    oneDriveApplicationId,
    action,
    multiSelect,
    advancedOptions
  ) {
    return new Promise(function (resolve, reject) {
      var odOptions = {
        clientId: oneDriveApplicationId,
        action: action || "download",
        multiSelect: multiSelect || true,
        openInNewWindow: true,
        advanced: advancedOptions || {},
        success: function (files) {
          handleSuccess(files);
        },
        cancel: function () {
          handleCancel();
        },
        error: function (e) {
          handleError(e);
        }
      };
      OneDrive.open(odOptions);
    });
  };

  return (
    <div className="App">
      <button onClick={() => launchOneDrivePicker(KEY, "share")}>
        Click here
      </button>
    </div>
  );
}

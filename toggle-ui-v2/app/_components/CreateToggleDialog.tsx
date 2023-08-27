import { CreateToggle, ToggleTypes } from "@/models/IToggle";
import { Dialog, Transition } from "@headlessui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Fragment, useState } from "react";
import Select from "./input/Select";
import Toggle from "./input/Toggle";

export default function CreateToggleDialog({
    isOpen,
    closeModal,
}: {
    isOpen: boolean;
    closeModal: () => void;
}) {
    const [createdToggle, setCreatedToggle] = useState({
        id: "",
        type: "",
        default: false,
    });

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {createdToggle.id === "" && (
                                        <div>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg
                                                font-medium leading-6
                                                text-gray-900"
                                            >
                                                Create New Toggle
                                            </Dialog.Title>
                                            <Formik
                                                initialValues={{
                                                    name: "",
                                                    type: ToggleTypes.BOOLEAN,
                                                    default: false,
                                                }}
                                                onSubmit={(
                                                    values: CreateToggle,
                                                    {
                                                        setSubmitting,
                                                    }: FormikHelpers<CreateToggle>
                                                ) => {
                                                    setTimeout(() => {
                                                        alert(
                                                            JSON.stringify(
                                                                values,
                                                                null,
                                                                2
                                                            )
                                                        );
                                                        setSubmitting(false);
                                                    }, 500);
                                                }}
                                            >
                                                {(props: any) => {
                                                    const { setFieldValue } =
                                                        props;
                                                    return (
                                                        <Form>
                                                            <div className="mt-2">
                                                                <h4 className="my-1">
                                                                    Toggle Name
                                                                </h4>
                                                                <Field
                                                                    id="name"
                                                                    name="name"
                                                                    placeholder="Toggle Name"
                                                                    required
                                                                    className="w-full border-none py-2 pl-3 pr-10 shadow-sm rounded-md ring-1 ring-inset ring-gray-300 text-sm leading-5 text-gray-900 focus:ring-0"
                                                                />
                                                            </div>
                                                            <div className="mt-2">
                                                                <h4 className="my-1">
                                                                    Toggle Type
                                                                </h4>
                                                                <Select
                                                                    options={[
                                                                        {
                                                                            id: 1,
                                                                            name: "Boolean",
                                                                            value: ToggleTypes.BOOLEAN,
                                                                            image: "https://www.svgrepo.com/types/duotone.svg",
                                                                        },
                                                                        {
                                                                            id: 2,
                                                                            name: "Integer",
                                                                            value: ToggleTypes.INTEGER,
                                                                            image: "https://www.svgrepo.com/show/341093/string-integer.svg",
                                                                        },
                                                                        {
                                                                            id: 3,
                                                                            name: "String",
                                                                            value: ToggleTypes.STRING,
                                                                            image: "https://www.svgrepo.com/show/341091/string-text.svg",
                                                                        },
                                                                    ]}
                                                                    onChangeActions={(
                                                                        option
                                                                    ) =>
                                                                        setFieldValue(
                                                                            "type",
                                                                            option.value!
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="my-5">
                                                                <h4 className="my-2">
                                                                    Default
                                                                    Serve Value
                                                                </h4>
                                                                <div className="space-x-2 flex items-center">
                                                                    <span className="text-xs font-light">
                                                                        False
                                                                    </span>
                                                                    <Toggle
                                                                        size="small"
                                                                        onChangeActions={(
                                                                            value
                                                                        ) => {
                                                                            setFieldValue(
                                                                                "default",
                                                                                value
                                                                            );
                                                                        }}
                                                                    />
                                                                    <span className="text-xs font-light">
                                                                        True
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="mt-8">
                                                                <button
                                                                    type="submit"
                                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                                >
                                                                    Create!
                                                                </button>
                                                            </div>
                                                        </Form>
                                                    );
                                                }}
                                            </Formik>
                                        </div>
                                    )}
                                    {createdToggle.id !== "" && (
                                        <div>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                Toggle Created Successfully
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Your payment has been
                                                    successfully submitted.
                                                    We’ve sent you an email with
                                                    all of the details of your
                                                    order.
                                                </p>
                                            </div>

                                            <div className="mt-4">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    Got it, thanks!
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

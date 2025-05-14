import React from "react";
import "./ProductCard.css";
import { useState } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { mens_kurta } from "../../../Data/Men/men_kurta";
import { filters, singleFilter, sortBy } from "./FilterData";
import ProductCard from "./ProductCard";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
} from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Product() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()

    const handleFilter = (value, sectionId) => {
        const searchParamms = new URLSearchParams(location.search)
        let filterValue = searchParamms.getAll(sectionId)
        if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
            filterValue = filterValue[0].split(",").filter((item) => item != value);
            if (filterValue.length === 0) {
                searchParamms.delete(sectionId)

            }
        } else {
            filterValue.push(value)
        }
        if (filterValue.length > 0) {
            searchParamms.set(sectionId, filterValue.join(","));


        }
        const query = searchParamms.toString();
        navigate({ search: `?${query}` })
    }

    // const handleRadioFilterChange = (e, sectionId) => {
    //     const searchParamms = new URLSearchParams(location.search)
    //     searchParamms.set(sectionId, e.target.value)
    //     const query = searchParamms.toString();
    //     navigate({ search: `?${query}` })


    // }
    const handleSingleCheckboxFilterChange = (e, sectionId) => {
        const searchParamms = new URLSearchParams(location.search);
        let filterValue = searchParamms.getAll(sectionId);

        const value = e.target.value;

        // If the checkbox is checked, add the value; otherwise, remove it
        if (e.target.checked) {
            filterValue.push(value);
        } else {
            filterValue = filterValue.filter((item) => item !== value);
        }

        // Update the query params
        if (filterValue.length > 0) {
            searchParamms.set(sectionId, filterValue.join(","));
        } else {
            searchParamms.delete(sectionId);
        }

        const query = searchParamms.toString();
        navigate({ search: `?${query}` });
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Mobile filter dialog */}
            <Dialog
                open={mobileFiltersOpen}
                onClose={setMobileFiltersOpen}
                className="relative z-40 lg:hidden"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative ml-auto flex h-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                    >
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(false)}
                                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Filters */}
                        <form className="mt-4 border-t border-gray-200">
                            <h3 className="sr-only">Categories</h3>

                            {filters.map((section) => (
                                <Disclosure
                                    key={section.id}
                                    as="div"
                                    className="border-t border-gray-200 px-4 py-6"
                                >
                                    <h3 className="-mx-2 -my-3 flow-root">
                                        <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900">
                                                {section.name}
                                            </span>
                                            <span className="ml-6 flex items-center">
                                                <PlusIcon
                                                    aria-hidden="true"
                                                    className="h-5 w-5 group-data-open:hidden"
                                                />
                                                <MinusIcon
                                                    aria-hidden="true"
                                                    className="h-5 w-5 group-not-data-open:hidden"
                                                />
                                            </span>
                                        </DisclosureButton>
                                    </h3>
                                    <DisclosurePanel className="pt-6">
                                        <div className="space-y-6">
                                            {section.options.map((option, optionIdx) => (
                                                <div key={option.value} className="flex gap-3">
                                                    <div className="flex h-5 shrink-0 items-center">
                                                        <div className="group grid h-4 w-4 grid-cols-1">
                                                            <input
                                                                defaultValue={option.value}
                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                type="checkbox"
                                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                            />
                                                            <svg
                                                                fill="none"
                                                                viewBox="0 0 14 14"
                                                                className="pointer-events-none col-start-1 row-start-1 h-3.5 w-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                            >
                                                                <path
                                                                    d="M3 8L6 11L11 3.5"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-checked:opacity-100"
                                                                />
                                                                <path
                                                                    d="M3 7H11"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label
                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                        className="min-w-0 flex-1 text-gray-500"
                                                    >
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

            <div className="mx-auto w-full">
                <div className="flex items-baseline justify-between border-b border-gray-200 px-4 pt-24 pb-6 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        New Arrivals
                    </h1>

                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <div className="py-1">
                                    {sortBy.map((option) => (
                                        <MenuItem key={option.name}>
                                            <a
                                                href={option.href}
                                                className={classNames(
                                                    option.current
                                                        ? "font-medium text-gray-900"
                                                        : "text-gray-500",
                                                    "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                                                )}
                                            >
                                                {option.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </div>
                            </MenuItems>
                        </Menu>

                        <button
                            type="button"
                            className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                        >
                            <span className="sr-only">View grid</span>
                            <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setMobileFiltersOpen(true)}
                            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                        >
                            <span className="sr-only">Filters</span>
                            <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="pb-24 pt-6">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                        {/* Filters - Takes exactly the space it needs */}
                        <>

                            <div className="hidden lg:block lg:col-span-1 lg:pr-4">
                                <div className="flex items-center justify-between mb-6 pl-4">
                                    <h1 className="text-lg font-bold text-gray-700">Filters</h1>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </div>
                                <form>
                                    <h3 className="sr-only">Categories</h3>

                                    {filters.map((section) => (
                                        <Disclosure
                                            key={section.id}
                                            as="div"
                                            className="border-b border-gray-200 py-6 px-4 mb-4"
                                        >
                                            <h3 className="-my-3 flow-root">
                                                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">
                                                        {section.name}
                                                    </span>
                                                    <span className="ml-6 flex items-center">
                                                        <PlusIcon
                                                            aria-hidden="true"
                                                            className="h-5 w-5 group-data-open:hidden"
                                                        />
                                                        <MinusIcon
                                                            aria-hidden="true"
                                                            className="h-5 w-5 group-not-data-open:hidden"
                                                        />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel className="pt-6">
                                                <div className="space-y-4">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex gap-3">
                                                            <div className="flex h-5 shrink-0 items-center">
                                                                <div className="group grid h-4 w-4 grid-cols-1">
                                                                    <input
                                                                        onChange={() => handleFilter(option.value, section.id)}
                                                                        defaultValue={option.value}
                                                                        defaultChecked={option.checked}
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        type="checkbox"
                                                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                    />
                                                                    <svg
                                                                        fill="none"
                                                                        viewBox="0 0 14 14"
                                                                        className="pointer-events-none col-start-1 row-start-1 h-3.5 w-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                    >
                                                                        <path
                                                                            d="M3 8L6 11L11 3.5"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="opacity-0 group-has-checked:opacity-100"
                                                                        />
                                                                        <path
                                                                            d="M3 7H11"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="opacity-0 group-has-indeterminate:opacity-100"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <label
                                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                className="text-sm text-gray-600"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ))}
                                    {singleFilter.map((section) => (
                                        <Disclosure
                                            key={section.id}
                                            as="div"
                                            className="border-b border-gray-200 py-6 px-4"
                                        >
                                            <h3 className="-my-3 flow-root">
                                                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        <PlusIcon
                                                            aria-hidden="true"
                                                            className="h-5 w-5 group-data-open:hidden"
                                                        />
                                                        <MinusIcon
                                                            aria-hidden="true"
                                                            className="h-5 w-5 group-not-data-open:hidden"
                                                        />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel className="pt-6">
                                                <div className="space-y-4">
                                                    {section.options.map((option) => (
                                                        <div key={option.value} className="flex items-center gap-3">
                                                            <input
                                                                type="checkbox"
                                                                id={`single-filter-${section.id}-${option.value}`}
                                                                value={option.value}
                                                                defaultChecked={location.search
                                                                    .split("&")
                                                                    .some((param) =>
                                                                        param.includes(`${section.id}=${option.value}`)
                                                                    )}
                                                                onChange={(e) => handleSingleCheckboxFilterChange(e, section.id)}
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <label
                                                                htmlFor={`single-filter-${section.id}-${option.value}`}
                                                                className="text-sm font-medium text-gray-700"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ))}
                                </form>
                            </div></>

                        {/* Product grid - Takes remaining space */}
                        <div className="lg:col-span-4 px-4 sm:px-6 lg:px-0">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                                {mens_kurta.map((item, index) => (
                                    <ProductCard key={item.id || index} product={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export const NavToggleSvg = ({ isWhite }: { isWhite?: boolean }) => {
    console.log(isWhite);
    return (
        <svg
            viewBox="0 -6 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-9 h-9"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <title>toggle-on</title> <desc>Created with Sketch Beta.</desc>{" "}
                <defs> </defs>{" "}
                <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fill-rule="evenodd"
                >
                    {" "}
                    <g
                        id="Icon-Set"
                        transform="translate(-204.000000, -365.000000)"
                        fill={isWhite ? "#ffffff" : "#000000"}
                    >
                        {" "}
                        <path
                            d="M214,379 C211.791,379 210,377.209 210,375 C210,372.791 211.791,371 214,371 C216.209,371 218,372.791 218,375 C218,377.209 216.209,379 214,379 L214,379 Z M214,369 C210.687,369 208,371.687 208,375 C208,378.313 210.687,381 214,381 C217.314,381 220,378.313 220,375 C220,371.687 217.314,369 214,369 L214,369 Z M226,383 L214,383 C209.582,383 206,379.418 206,375 C206,370.582 209.582,367 214,367 L226,367 C230.418,367 234,370.582 234,375 C234,379.418 230.418,383 226,383 L226,383 Z M226,365 L214,365 C208.477,365 204,369.478 204,375 C204,380.522 208.477,385 214,385 L226,385 C231.523,385 236,380.522 236,375 C236,369.478 231.523,365 226,365 L226,365 Z"
                            id="toggle-on"
                        >
                            {" "}
                        </path>{" "}
                    </g>{" "}
                </g>{" "}
            </g>
        </svg>
    );
};

export const NavUserSvg = ({ isWhite }: { isWhite?: boolean }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>{" "}
            </g>
        </svg>
    );
};

export const NavConfigureSvg = ({ isWhite }: { isWhite?: boolean }) => {
    return (
        <svg
            fill="#000000"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M262.749 410.667H.000648499V282.667H262.749C292.139 145.504 414.06 42.6667 560 42.6667 705.94 42.6667 827.861 145.504 857.251 282.667H1920V410.667H857.251C827.861 547.829 705.94 650.667 560 650.667 414.06 650.667 292.139 547.829 262.749 410.667ZM384 346.667C384 249.465 462.798 170.667 560 170.667 657.202 170.667 736 249.465 736 346.667 736 443.869 657.202 522.667 560 522.667 462.798 522.667 384 443.869 384 346.667ZM.000648499 896H1009.42C1038.81 758.837 1160.73 656 1306.67 656 1452.61 656 1574.53 758.837 1603.92 896H1920V1024H1603.92C1574.53 1161.16 1452.61 1264 1306.67 1264 1160.73 1264 1038.81 1161.16 1009.42 1024H.000648499V896ZM1306.67 784C1209.46 784 1130.67 862.798 1130.67 960 1130.67 1057.2 1209.46 1136 1306.67 1136 1403.87 1136 1482.67 1057.2 1482.67 960 1482.67 862.798 1403.87 784 1306.67 784ZM857.251 1637.33C827.861 1774.5 705.94 1877.33 560 1877.33 414.06 1877.33 292.139 1774.5 262.749 1637.33H.000648499V1509.33H262.749C292.139 1372.17 414.06 1269.33 560 1269.33 705.94 1269.33 827.861 1372.17 857.251 1509.33H1920V1637.33H857.251ZM384 1573.33C384 1476.13 462.798 1397.33 560 1397.33 657.202 1397.33 736 1476.13 736 1573.33 736 1670.54 657.202 1749.33 560 1749.33 462.798 1749.33 384 1670.54 384 1573.33Z"
                ></path>{" "}
            </g>
        </svg>
    );
};

export const NavDashboardSvg = ({ isWhite }: { isWhite?: boolean }) => {
    return (
        <svg
            fill="#000000"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M833.935 1063.327c28.913 170.315 64.038 348.198 83.464 384.79 27.557 51.84 92.047 71.944 144 44.387 51.84-27.558 71.717-92.273 44.16-144.113-19.426-36.593-146.937-165.46-271.624-285.064Zm-43.821-196.405c61.553 56.923 370.899 344.81 415.285 428.612 56.696 106.842 15.811 239.887-91.144 296.697-32.64 17.28-67.765 25.411-102.325 25.411-78.72 0-154.955-42.353-194.371-116.555-44.386-83.802-109.102-501.346-121.638-584.245-3.501-23.717 8.245-47.21 29.365-58.277 21.346-11.294 47.096-8.02 64.828 8.357ZM960.045 281.99c529.355 0 960 430.757 960 960 0 77.139-8.922 153.148-26.654 225.882l-10.39 43.144h-524.386v-112.942h434.258c9.487-50.71 14.231-103.115 14.231-156.084 0-467.125-380.047-847.06-847.059-847.06-467.125 0-847.059 379.935-847.059 847.06 0 52.97 4.744 105.374 14.118 156.084h487.454v112.942H36.977l-10.39-43.144C8.966 1395.137.044 1319.128.044 1241.99c0-529.243 430.645-960 960-960Zm542.547 390.686 79.85 79.85-112.716 112.715-79.85-79.85 112.716-112.715Zm-1085.184 0L530.123 785.39l-79.85 79.85L337.56 752.524l79.849-79.85Zm599.063-201.363v159.473H903.529V471.312h112.942Z"
                    fill-rule="evenodd"
                ></path>{" "}
            </g>
        </svg>
    );
};

export const NavQuickStartSvg = ({ isWhite }: { isWhite?: boolean }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                    fill="#000000"
                ></path>{" "}
                <path
                    d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                    fill="#000000"
                ></path>{" "}
            </g>
        </svg>
    );
};

export const NavDocumentationSvg = ({ isWhite }: { isWhite?: boolean }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M7.25 7C7.25 6.58579 7.58579 6.25 8 6.25H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41422 16.4142 7.75 16 7.75H8C7.58579 7.75 7.25 7.41422 7.25 7Z"
                    fill="#000000"
                ></path>{" "}
                <path
                    d="M8 9.75C7.58579 9.75 7.25 10.0858 7.25 10.5C7.25 10.9142 7.58579 11.25 8 11.25H13C13.4142 11.25 13.75 10.9142 13.75 10.5C13.75 10.0858 13.4142 9.75 13 9.75H8Z"
                    fill="#000000"
                ></path>{" "}
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.94513 1.25C8.57754 1.24998 7.47521 1.24996 6.60825 1.36652C5.70814 1.48754 4.95027 1.74643 4.34835 2.34835C3.74643 2.95027 3.48754 3.70814 3.36652 4.60825C3.24996 5.47521 3.24998 6.57753 3.25 7.94512V16.0549C3.24998 17.4225 3.24996 18.5248 3.36652 19.3918C3.48754 20.2919 3.74643 21.0497 4.34835 21.6517C4.95027 22.2536 5.70814 22.5125 6.60825 22.6335C7.47522 22.75 8.57754 22.75 9.94513 22.75H14.0549C15.4225 22.75 16.5248 22.75 17.3918 22.6335C18.2919 22.5125 19.0497 22.2536 19.6517 21.6517C20.2536 21.0497 20.5125 20.2919 20.6335 19.3918C20.75 18.5248 20.75 17.4225 20.75 16.0549V7.94513C20.75 6.57754 20.75 5.47522 20.6335 4.60825C20.5125 3.70814 20.2536 2.95027 19.6517 2.34835C19.0497 1.74643 18.2919 1.48754 17.3918 1.36652C16.5248 1.24996 15.4225 1.24998 14.0549 1.25H9.94513ZM5.40901 3.40901C5.68577 3.13225 6.07435 2.9518 6.80812 2.85315C7.56347 2.75159 8.56459 2.75 10 2.75H14C15.4354 2.75 16.4365 2.75159 17.1919 2.85315C17.9257 2.9518 18.3142 3.13225 18.591 3.40901C18.8678 3.68577 19.0482 4.07435 19.1469 4.80812C19.2484 5.56347 19.25 6.56459 19.25 8V15.25L7.78198 15.25C6.96402 15.2497 6.40587 15.2495 5.92721 15.3778C5.49923 15.4925 5.10224 15.6798 4.75 15.9259V8C4.75 6.56459 4.75159 5.56347 4.85315 4.80812C4.9518 4.07435 5.13225 3.68577 5.40901 3.40901ZM4.77676 18.2491C4.79196 18.6029 4.81579 18.914 4.85315 19.1919C4.9518 19.9257 5.13225 20.3142 5.40901 20.591C5.68577 20.8678 6.07435 21.0482 6.80812 21.1469C7.56347 21.2484 8.56459 21.25 10 21.25H14C15.4354 21.25 16.4365 21.2484 17.1919 21.1469C17.9257 21.0482 18.3142 20.8678 18.591 20.591C18.8678 20.3142 19.0482 19.9257 19.1469 19.1919C19.2297 18.5756 19.246 17.7958 19.2492 16.75H7.89778C6.91952 16.75 6.57752 16.7564 6.31544 16.8267C5.59612 17.0194 5.02268 17.5541 4.77676 18.2491Z"
                    fill="#000000"
                ></path>{" "}
            </g>
        </svg>
    );
};

export const NavPlusSvg = ({ isWhite }: { isWhite?: boolean }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M4 12H20M12 4V20"
                    stroke={isWhite ? "#ffffff" : "#000000"}
                    fill={isWhite ? "#ffffff" : "#000000"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>{" "}
            </g>
        </svg>
    );
};

export const NavEnvironmentSvg = () => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.57801 5.34262C3.83444 7.02492 2.75 9.38581 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C12.1275 21.25 12.2544 21.2474 12.3807 21.2423C12.1752 20.3307 12.1474 19.1051 12.774 17.9243C13.4261 16.6955 14.7762 16.1622 15.7689 15.9182C16.289 15.7904 16.7708 15.7273 17.1211 15.6959C17.2972 15.6801 17.4423 15.6721 17.5452 15.668C17.5966 15.666 17.6377 15.6649 17.667 15.6644L17.7019 15.6639L17.7104 15.6638C19.3829 15.6464 20.1364 15.1025 20.5363 14.5836C20.8779 14.1404 21.0069 13.6971 21.1377 13.2475C21.1543 13.1903 21.171 13.133 21.1881 13.0756C21.229 12.7227 21.25 12.3638 21.25 12C21.25 9.47592 20.239 7.18797 18.5999 5.51898C18.5912 5.55304 18.5823 5.5866 18.5732 5.6196C18.4104 6.21256 18.1475 6.82114 17.8618 7.25475C17.6059 7.64313 17.1095 8.03492 16.6975 8.33094C16.4263 8.52578 16.144 8.6913 15.8879 8.83888C15.857 8.85672 15.8265 8.87428 15.7963 8.8916C15.5683 9.02278 15.3631 9.14077 15.1656 9.27123C14.7338 9.55655 14.3997 9.86363 14.1748 10.3273C14.0961 10.4897 14.0936 10.6481 14.1402 10.8177C14.2148 11.0892 14.2656 11.3946 14.2664 11.706C14.2681 12.355 13.9375 12.8817 13.5126 13.2241C13.0928 13.5625 12.5441 13.756 11.9918 13.75C9.53653 13.7231 8.02692 11.7306 7.82782 9.51448C7.74861 8.63293 7.36212 7.74121 6.87411 6.96185C6.42593 6.2461 5.92094 5.67095 5.57801 5.34262ZM6.74505 4.38662C7.1601 4.80462 7.68084 5.42381 8.14544 6.16579C8.70296 7.05616 9.21374 8.17759 9.3218 9.38025C9.47276 11.0605 10.5349 12.234 12.0082 12.25C12.2108 12.2523 12.4212 12.1772 12.5714 12.0562C12.7165 11.9393 12.7667 11.8158 12.7664 11.7099C12.766 11.5544 12.7398 11.3825 12.6937 11.2148C12.5726 10.7736 12.5553 10.2292 12.8252 9.67271C13.2102 8.87891 13.7808 8.38838 14.3388 8.01971C14.5779 7.86171 14.826 7.71918 15.0498 7.59055C15.08 7.57322 15.1097 7.55613 15.1389 7.5393C15.3941 7.39218 15.6182 7.25939 15.8222 7.11277C16.2533 6.80305 16.526 6.55581 16.6092 6.42947C16.7917 6.15255 16.9969 5.69533 17.1267 5.2225C17.2296 4.84787 17.2581 4.56036 17.2485 4.38216C15.7573 3.35281 13.949 2.75 12 2.75C10.0481 2.75 8.23748 3.35455 6.74505 4.38662ZM22.6792 13.2403C22.726 12.8333 22.75 12.4195 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.4604 22.75 21.9699 18.6789 22.6588 13.4064C22.6771 13.3429 22.6929 13.29 22.7071 13.2501L22.6792 13.2403ZM19.9047 16.8066C19.3091 17.0249 18.5912 17.1547 17.7261 17.1638L17.7182 17.1638V17.1638L17.7156 17.1638L17.695 17.1641C17.6755 17.1645 17.6449 17.1652 17.6044 17.1668C17.5233 17.1701 17.4034 17.1766 17.2552 17.1899C16.9571 17.2166 16.5537 17.27 16.1269 17.3749C15.2257 17.5964 14.435 17.9942 14.099 18.6274C13.6435 19.4857 13.7085 20.4196 13.8784 21.0592C16.4274 20.5334 18.5931 18.9589 19.9047 16.8066Z"
                    fill="#000000"
                ></path>{" "}
            </g>
        </svg>
    );
};

export const NavDropdownArrow = ({ isWhite }: { isWhite?: boolean }) => {
    return (
        <svg
            fill="#6A6A6B"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <g data-name="Layer 2">
                    {" "}
                    <g data-name="arrow-ios-downward">
                        {" "}
                        <rect width="24" height="24" opacity="0"></rect>{" "}
                        <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"></path>{" "}
                    </g>{" "}
                </g>{" "}
            </g>
        </svg>
    );
};

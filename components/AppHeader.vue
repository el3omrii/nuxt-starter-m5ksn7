<template>
    <header
      class="relative flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-white border-b border-gray-200 text-sm pb-2 sm:pb-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <!-- Topbar -->
      <div class="mx-auto w-full px-4 sm:px-6 lg:px-8 bg-secondary">
        <div class="max-w-7xl flex items-center justify-end gap-x-2 w-full py-1">
          <a
            class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-400 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
            href="#"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              ></path>
            </svg>
          </a>
          <a
            class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-400 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
            href="#"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              ></path>
            </svg>
          </a>
          <a
            class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-400 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
            href="#"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <a
            class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-400 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
            href="#"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <!-- End Topbar -->
  
      <nav
        class="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 bg-primary shadow-md shadow-black/50"
        aria-label="Global"
      >
        <div class="flex max-w-7xl items-center justify-between">
          <NuxtLink to="/">
          <div
            class="flex-none md:absolute top-0 h-full md:flex md:items-center px-2 text-xl font-semibold dark:text-white bg-primary md:shadow-md md:shadow-black/50"
            aria-label="Brand"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              width="250px"
              height="70px"
              viewBox="0 0 250 70"
              enable-background="new 0 0 250 70"
              xml:space="preserve"
              class="fill-secondary"
            >
              <g id="texte">
                <rect
                  x="4"
                  y="6"
                  fill="none"
                  stroke="#393E46"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  width="180"
                  height="60"
                />
                <rect x="184" y="5" width="62" height="62" />
                <g>
                  <polygon
                    points="45.894,39 45.462,39 40.086,18 32.966,18 31.638,18 11,18 11,24 18,24 18,48 26,48 26,24 33,24 33,22.821     39.126,48 52.229,48 59.718,18 51.27,18   "
                  />
                  <path
                    d="M80.476,18.724c0.592,0.432,1.111,0.648,1.561,0.648c0.447,0,0.96-0.224,1.535-0.672c0.576-0.448,1.088-0.96,1.536-1.536    s0.672-1.088,0.672-1.536c0-0.512-0.216-1.048-0.647-1.608c-0.433-0.56-0.937-1.056-1.512-1.487    c-0.576-0.433-1.104-0.648-1.584-0.648c-0.48,0-1.009,0.216-1.584,0.648c-0.576,0.432-1.08,0.928-1.513,1.487    c-0.432,0.561-0.647,1.097-0.647,1.608c0,0.416,0.216,0.929,0.647,1.536C79.372,17.772,79.883,18.292,80.476,18.724z"
                  />
                  <path
                    d="M89.067,18.724c0.592,0.432,1.111,0.648,1.561,0.648c0.447,0,0.96-0.224,1.536-0.672c0.575-0.448,1.087-0.96,1.535-1.536    s0.673-1.088,0.673-1.536c0-0.512-0.217-1.048-0.648-1.608c-0.432-0.56-0.936-1.056-1.512-1.487    c-0.576-0.433-1.104-0.648-1.584-0.648c-0.48,0-1.008,0.216-1.584,0.648c-0.576,0.432-1.08,0.928-1.513,1.487    c-0.432,0.561-0.647,1.097-0.647,1.608c0,0.416,0.216,0.929,0.647,1.536C87.964,17.772,88.476,18.292,89.067,18.724z"
                  />
                  <path
                    d="M78.964,25.45c-1.473,0.32-2.616,0.873-3.433,1.689c-0.815,0.815-1.384,1.953-1.703,3.424    c-0.32,1.473-0.48,3.356-0.48,5.66s0.16,4.19,0.48,5.662c0.319,1.473,0.888,2.615,1.703,3.431c0.816,0.816,1.96,1.634,3.433,1.953    c1.472,0.32,3.327,0.73,5.567,0.73H97V25H84.531C82.291,25,80.436,25.131,78.964,25.45z M90,40h-7.389    c-0.704,0-0.998-0.193-1.333-0.498C80.942,39.198,81,38.716,81,38.14V34.3c0-0.576-0.058-0.777,0.278-1.082    C81.614,32.914,81.907,33,82.611,33H90V40z"
                  />
                  <path
                    d="M107,46.492c0,1.695-0.371,3.055-0.625,4.079c-0.257,1.024-0.841,1.849-1.513,2.473s-1.692,1.224-2.94,1.8l2.466,6.048    c2.144-0.929,3.856-2.016,5.168-3.264s2.131-2.776,2.707-4.584c0.576-1.809,0.738-3.992,0.738-6.552V25h-6V46.492z"
                  />
                  <path
                    d="M177.178,29.476c-0.512-1.231-1.419-2.149-2.667-2.662C173.263,26.303,171.508,26,169.3,26h-12.048    c0.191-1,0.511-1.649,0.96-2.643c0.447-0.991,0.983-1.976,1.607-3c0.624-1.023,1.279-1.981,1.968-2.893s1.368-1.682,2.04-2.322    l-5.424-2.925c-1.056,1.024-2.04,2.194-2.952,3.505c-0.912,1.313-1.704,2.689-2.376,4.129c-0.672,1.44-1.199,2.856-1.584,4.248    c-0.384,1.393-0.576,2.697-0.576,3.913c0,1.824,0.473,3.387,1.416,4.362c0.944,0.977,2.296,1.626,4.057,1.626H171v6h-23.061h-1.92    H143V26.092c-2-0.672-3.451-1.144-5.162-1.416c-1.713-0.271-3.802-0.408-6.169-0.408c-2.112,0-3.953,0.216-5.473,0.648    c-1.521,0.432-2.756,1.097-3.684,1.992c-0.929,0.896-1.632,2.063-2.095,3.504c-0.465,1.439-0.699,3.168-0.699,5.184    c0,2.145,0.19,3.977,0.575,5.496c0.384,1.521,0.95,2.753,1.703,3.696c0.751,0.944,1.751,1.882,2.999,2.313    c1.247,0.433,2.719,0.898,4.416,0.898h4.729c-0.132,0-0.265,0.31-0.409,0.59c-0.736,1.424-1.616,2.659-2.64,3.955    c-1.024,1.296-2.145,2.393-3.36,3.417l4.512,4.961c1.568-1.376,2.992-2.92,4.272-4.6c1.279-1.68,2.392-3.189,3.336-5.014    c0.604-1.167,1.109-2.31,1.536-3.31h4.632h1.92H178V34.636C178,32.428,177.689,30.708,177.178,29.476z M127,40v-6.084    c0-0.8,0.149-1.286,0.533-1.558c0.385-0.271,1.046-0.358,2.07-0.358H136v5.948c0,0.736-0.126,1.289-0.414,1.577    S134.804,40,134.067,40H127z"
                  />
                </g>
              </g>
              <g id="logo">
                <g transform="matrix(0,-1,1,0,-0.0003,32.0003)">
                  <path
                    fill="#FFFFFF"
                    d="M-16.95,215.167l1.41-0.815l1.623-0.937l0,0l0,0c0.599-0.345,1.084-1.185,1.084-1.875v-1.874v-1.875    c0-0.69-0.485-1.53-1.084-1.875l-1.623-0.938l-1.41-0.814c-0.573,1.73-0.883,3.58-0.883,5.502    C-17.833,211.587-17.523,213.438-16.95,215.167z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M-4.914,192.188v0.137c0,0.689,0.485,1.529,1.084,1.875l1.623,0.937l1.624,0.938    c0.598,0.345,1.567,0.345,2.166,0l1.623-0.938L4.83,194.2l0,0c0.598-0.346,1.083-1.186,1.083-1.875v-0.137    c-1.705-0.555-3.525-0.855-5.413-0.855C-1.388,191.332-3.208,191.633-4.914,192.188z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M5.833,214.284l-2,1.155l-2,1.155c-0.736,0.425-1.93,0.425-2.666,0l-2-1.155l-2.001-1.155    c-0.736-0.425-1.333-1.459-1.333-2.309v-2.309v-2.311c0-0.849,0.597-1.883,1.333-2.309l2.001-1.154l2-1.155    c0.736-0.425,1.93-0.425,2.666,0l2,1.155l2,1.154c0.736,0.426,1.333,1.46,1.333,2.309v2.311v2.309    C7.166,212.825,6.57,213.859,5.833,214.284L5.833,214.284L5.833,214.284L5.833,214.284L5.833,214.284z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M-13.116,219.265c0.25,0.367,0.35,0.817,0.283,1.25c-0.084,0.434-0.316,0.817-0.684,1.084    c-0.366,0.25-0.816,0.35-1.25,0.283c-0.434-0.083-0.816-0.333-1.066-0.684c-2.384-3.383-3.667-7.399-3.667-11.532    c0-3.4,0.867-6.734,2.517-9.7c0.217-0.384,0.566-0.684,1-0.8c0.417-0.117,0.867-0.066,1.267,0.149    c0.384,0.217,0.667,0.567,0.783,1c0.134,0.417,0.067,0.884-0.133,1.267c-1.384,2.467-2.101,5.25-2.101,8.084    C-16.167,213.099-15.099,216.465-13.116,219.265z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M-8.266,195.549c-0.367,0.25-0.817,0.334-1.25,0.233c-0.434-0.1-0.817-0.35-1.051-0.716    c-0.232-0.384-0.315-0.834-0.232-1.268c0.1-0.434,0.366-0.8,0.732-1.05c3.15-2.017,6.817-3.1,10.567-3.083    c5.3,0,10.399,2.117,14.149,5.866c3.75,3.733,5.85,8.833,5.85,14.134c0,5.299-2.116,10.399-5.85,14.148    c-3.75,3.733-8.85,5.851-14.149,5.851c-2.15,0-4.283-0.351-6.317-1.017c-0.416-0.15-0.767-0.45-0.966-0.834    c-0.2-0.399-0.233-0.866-0.084-1.283c0.134-0.416,0.434-0.767,0.834-0.967c0.399-0.183,0.85-0.217,1.267-0.083    c1.7,0.566,3.483,0.85,5.267,0.85c4.416,0,8.666-1.75,11.783-4.883c3.133-3.116,4.883-7.366,4.883-11.782    c0-4.417-1.75-8.667-4.883-11.783c-3.117-3.134-7.367-4.884-11.783-4.884C-2.616,192.983-5.65,193.883-8.266,195.549z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M5.913,227.144L5.913,227.144v-0.137c0-0.69-0.485-1.53-1.083-1.875l-1.624-0.938l-1.623-0.938    c-0.599-0.345-1.568-0.345-2.166,0l-1.624,0.938l-1.623,0.938c-0.599,0.345-1.084,1.185-1.084,1.875v0.137    c1.706,0.555,3.525,0.854,5.414,0.854C2.388,227.998,4.208,227.699,5.913,227.144z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M17.95,204.164L17.95,204.164l-1.41,0.814l-1.623,0.938c-0.599,0.345-1.083,1.185-1.083,1.875v1.875v1.874    c0,0.69,0.484,1.53,1.083,1.875l1.623,0.938l1.41,0.813c0.573-1.729,0.884-3.58,0.884-5.501    C18.833,207.744,18.523,205.895,17.95,204.164z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M-15.766,239.199c-0.316,0.316-0.75,0.483-1.184,0.467c-0.449-0.017-0.866-0.2-1.166-0.517    c-0.301-0.317-0.467-0.75-0.45-1.2c0-0.434,0.184-0.851,0.517-1.15l11.616-11.05c0.316-0.3,0.75-0.467,1.184-0.45    c0.45,0,0.867,0.2,1.167,0.517c0.3,0.317,0.467,0.75,0.467,1.184c-0.018,0.45-0.2,0.867-0.518,1.167L-15.766,239.199z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M-5.683,236.815l11-10.983c0.316-0.316,0.733-0.5,1.184-0.5c0.433,0,0.866,0.184,1.166,0.5    c0.317,0.301,0.5,0.733,0.5,1.167c0,0.45-0.183,0.867-0.5,1.184l-10.982,11c-0.317,0.3-0.733,0.483-1.184,0.483    s-0.867-0.184-1.184-0.483c-0.3-0.317-0.483-0.733-0.483-1.184S-5.983,237.131-5.683,236.815z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M-19.133,228.165c-0.334,0.3-0.75,0.467-1.2,0.467c-0.434-0.017-0.867-0.2-1.167-0.517    c-0.3-0.334-0.467-0.75-0.45-1.2c0-0.434,0.2-0.867,0.518-1.167l11.615-11.033c0.317-0.3,0.75-0.467,1.184-0.467    c0.45,0.018,0.867,0.201,1.167,0.534C-7.15,215.099-7,215.515-7,215.965c-0.017,0.434-0.2,0.867-0.517,1.167L-19.133,228.165z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M-11.483,227.565c-0.316,0.301-0.75,0.45-1.2,0.434c-0.433-0.017-0.85-0.217-1.149-0.55    s-0.45-0.767-0.434-1.2c0.033-0.45,0.233-0.85,0.55-1.15l5.816-5.249c0.316-0.3,0.75-0.45,1.2-0.434    c0.434,0.017,0.85,0.217,1.15,0.55c0.3,0.334,0.449,0.767,0.433,1.2c-0.033,0.45-0.217,0.85-0.55,1.15L-11.483,227.565z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M-22.516,219.783c-0.333,0.3-0.767,0.449-1.217,0.433c-0.433-0.033-0.85-0.217-1.149-0.55    s-0.45-0.767-0.417-1.2c0.017-0.45,0.217-0.866,0.533-1.149l5.816-5.25c0.334-0.3,0.767-0.45,1.2-0.434    c0.45,0.017,0.851,0.217,1.15,0.55c0.3,0.316,0.45,0.75,0.433,1.2c-0.017,0.434-0.216,0.851-0.55,1.149L-22.516,219.783z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M-25.682,211.715c-0.317,0.301-0.75,0.467-1.2,0.45c-0.434-0.017-0.85-0.2-1.15-0.517    c-0.316-0.316-0.482-0.75-0.466-1.184c0.017-0.449,0.199-0.866,0.517-1.166l11.616-11.05c0.316-0.3,0.75-0.467,1.199-0.45    c0.434,0.017,0.851,0.2,1.167,0.517c0.3,0.317,0.467,0.75,0.45,1.184c-0.017,0.45-0.2,0.866-0.517,1.167L-25.682,211.715z"
                  />
                  <circle
                    vector-effect="non-scaling-stroke"
                    fill="#FFFFFF"
                    cx="-27.833"
                    cy="222.999"
                    r="1.667"
                  />
                </g>
              </g>
            </svg>
          </div>
        </NuxtLink>
          <div class="md:hidden">
            <button
              @click="toggleNav"
              type="button"
              class="p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium text-gray-700 shadow-sm align-middle bg-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              <svg
                v-if="!isOpen"
                class="w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                v-else
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- desktop nav -->
        <div
          class="overflow-hidden transition-all duration-300 basis-full grow"
        >
          <ul
            class="hidden md:flex items-center sm:gap-x-4 mr-72 text-white font-bold p-2"
          >
            <li>
              <NuxtLink to="/"
                class="menu-link"
                active-class="border-b-2 border-white"
                aria-current="page"
                >الرئيسية
              </NuxtLink>
            </li>
            <li>
              <MegaMenu />
            </li>
            <li>
              <NuxtLink to="/category/كرة-عربية"
                class="menu-link"
                active-class="border-b-2 border-white"
                aria-current="page"
                 >كرة عربية
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/matches"
                class="menu-link"
                active-class="border-b-2 border-white"
                aria-current="page"
                >مباريات اليوم
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <!-- off canvas nav-->
      <div
        class="md:hidden fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-primary border-r dark:bg-gray-800 dark:border-gray-700"
        :class="[!isOpen ? 'translate-x-full' : 'translate-x-0']"
        ref="mobileNav"
      >
        <div class="p-4">
          <p class="text-gray-800 dark:text-gray-400">
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
        </div>
      </div>
      <div v-if="header.disposition == 'article'"
           class="fixed flex items-center justify-center w-full h-16 top-0 bg-white/90 shadow-md transition duration-300"
           :class="[!sticky ? '-translate-y-full' : 'translate-y-0']"
      >
        <div class="rounded-full bg-primary py-2 px-4 ml-8 text-white whitespace-nowrap">
          {{ header.meta.category }}
        </div>
        <h2 class="text-secondary text-xl">{{ header.meta.title }}</h2>
      </div>  
      <div v-else-if="header.disposition == 'match'"
           class="fixed flex items-center justify-center w-full h-16 top-0 bg-white/90 shadow-md transition duration-300"
           :class="[!sticky ? '-translate-y-full' : 'translate-y-0']"
      >
        <div class="w-full mx-20 flex justify-between iitems-center">
          <div class="flex items-center">
            <img :src="header.meta.home" class="w-14 h-14">
            <span class="text-2xl">{{ header.meta.home_score }}</span>
          </div>
          <span v-if="header.meta.status == 'FT'" class="text-red-600 text-2xl font-bold my-2">إنتهت المباراة</span>
          <span v-if="header.meta.status == 'AET'" class="text-red-600 text-2xl font-bold my-2">إنتهت المباراة أشواط
            إضافية</span>
          <div class="flex flex-row-reverse items-center">
            <img :src="header.meta.away" class="w-14 h-14">
            <span class="text-2xl">{{ header.meta.away_score }}</span>
          </div>
        </div>
        
      </div>  
    </header>
  </template>
<script setup>
  const isOpen = useState("isOpen", () => false);
  const toggleNav = () => (isOpen.value = !isOpen.value);
  const header = useState('header')
  const sticky = ref(false)
  const mobileNav = ref()
  onMounted(() => {
    window.addEventListener('scroll', () => {
        let limit = 200
        header.value.disposition == 'match' ? limit = 500 : limit = 200
        sticky.value = window.scrollY > limit ? true: false
    })
  })
</script>
  
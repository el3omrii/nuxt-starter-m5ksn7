<template>
  <nav
    class="w-full mx-auto my-6"
    :aria-label="ariaLabel"
  >
    <ul class="flex justify-center items-center gap-x-4">
      <li
        v-if="isFirstLast"
        :class="paginationItemFirstClasses"
      >
        <button
          :class="paginationButtonClass"
          @click.prevent="handleClick(1)"
          :disabled="isOnFirst()"
          :aria-disabled="isOnFirst()"
          aria-label="Goto page 1"
          v-tooltip.arrow="navigationLabels.first"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>
      <li :class="paginationItemFirstClasses">
        <button
          :class="paginationButtonClass"
          @click.prevent="handleClick(current - 1)"
          :disabled="isOnFirst()"
          :aria-disabled="isOnFirst()"
          aria-label="Goto previous page"
          v-tooltip.arrow="navigationLabels.previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>
      <li
        v-for="page in pages"
        :key="`page-${page}`"
        :class="paginationItemClassesForPage(page)"
      >
        <button
          v-if="page === current"
          @click.prevent="handleClick(page)"
          :class="[paginationButtonClass, paginationButtonCurrentClass]"
          type="button"
          aria-current="page"
          :aria-label="`Page ${page}, current page`"
        >
          {{ page }}
        </button>
        <span v-else-if="page === '...'">{{ page }}</span>
        <button
          v-else
          @click.prevent="handleClick(page)"
          :class="paginationButtonClass"
          type="button"
          :aria-label="`Goto page ${page}`"
        >
          {{ page }}
        </button>
      </li>
      <li :class="paginationItemLastClasses">
        <button
          :class="paginationButtonClass"
          @click.prevent="handleClick(current + 1)"
          :disabled="isOnLast()"
          :aria-disabled="isOnLast()"
          aria-label="Goto next page"
          v-tooltip.arrow="navigationLabels.next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </li>
      <li
        v-if="isFirstLast"
        :class="paginationItemLastClasses"
      >
        <button
          :class="paginationButtonClass"
          @click.prevent="handleClick(getLastPageNumber())"
          :disabled="isOnLast()"
          :aria-disabled="isOnLast()"
          aria-label="Goto last page"
          v-tooltip.arrow="navigationLabels.last"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed, useCssModule } from "vue";

export interface PaginationProps {
  justify?: "start" | "center" | "end" | "";
  ariaLabel?: string;
  current: number;
  pages: number;
  isBordered?: boolean;
  isFirstLast?: boolean;
  navigationLabels?: any;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  ariaLabel: "pagination",
  isFirstLast: true,
  navigationLabels: {
    first: "First",
    last: "Last",
    previous: "Previous",
    next: "Next",
  },
});

const styles = useCssModule();

const emit = defineEmits(["update-page"]);

const isOnFirst = () => {
  return props.current === 1;
};

const getLastPageNumber = () => {
  return props.pages;
};

const isOnLast = () => {
  return props.current === getLastPageNumber();
};

const handleClick = (pageNumber) => {
  emit("update-page", pageNumber);
};

const paginationItemClass = styles["pagination-item"];

// COMPUTED CSS
const paginationButtonClass = "w-10 h-10 flex items-center justify-center border rounded-md border-secondary[.8] hover:border-2 hover:border-sky-700";
const paginationButtonCurrentClass = "bg-primary text-white font-bold";
const paginationContainerClasses = computed(() => {
  return {
    [styles["pagination-container"]]: true,
    [styles[`pagination-${props.justify}`]]: !!props.justify,
  };
});

const paginationClasses = computed(() => {
  return {
    [styles["pagination"]]: true,
    [styles["pagination-bordered"]]: !!props.isBordered,
  };
});

const paginationItemFirstClasses = computed(() => {
  return {
    [paginationItemClass]: true,
    [styles["pagination-item-disabled"]]: isOnFirst(),
  };
});
const paginationItemLastClasses = computed(() => {
  return {
    [paginationItemClass]: true,
    [styles["pagination-item-disabled"]]: isOnLast(),
  };
});

const paginationItemClassesForPage = (page) => {
  return {
    [paginationItemClass]: true,
    [styles["pagination-item-active"]]: page === props.current,
    [styles["pagination-item-gap"]]: page === "...",
  };
};
</script>

<style module>
.pagination-container {
  display: flex;
}

.pagination {
  display: flex;
  list-style: none;
}

.pagination-item {
  padding-inline-start: var(--fluid-2);
  padding-inline-end: var(--fluid-2);
}

.pagination-button {
  --agnostic-pagination-button-color: var(--agnostic-primary);

  color: var(--agnostic-pagination-button-color);
  display: inline-block;
  line-height: var(--fluid-20);
  padding-inline-start: var(--fluid-12);
  padding-inline-end: var(--fluid-12);
  padding-block-start: var(--fluid-6);
  padding-block-end: var(--fluid-6);
  border-radius: var(--agnostic-radius);

  /* We need a border set on both hovered and unhovered so it does not jump around */
  border: 1px solid transparent;
  background-color: transparent;
}

.pagination-button:focus {
  box-shadow: 0 0 0 var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-color);

  /* Needed for High Contrast mode */
  outline:
    var(--agnostic-focus-ring-outline-width) var(--agnostic-focus-ring-outline-style)
    var(--agnostic-focus-ring-outline-color);
  transition: box-shadow var(--agnostic-timing-fast) ease-out;
}

@media (prefers-reduced-motion), (update: slow) {
  .pagination-button:focus {
    transition-duration: 0.001ms !important;
  }
}

.pagination-item-disabled {
  cursor: not-allowed;
}

.pagination-button:disabled,
.pagination-item-disabled .pagination-button {
  color: var(--agnostic-pagination-disabled-bg, var(--agnostic-gray-mid-dark));
  opacity: 80%;
  pointer-events: none;
}

.pagination-item-active .pagination-button {
  background-color: var(--agnostic-primary);
  color: var(--agnostic-light);
}

.pagination-bordered .pagination-item-active .pagination-button {
  background-color: unset;
  border: 1px solid var(--agnostic-primary);
  color: var(--agnostic-primary);
}

.pagination-item:hover .pagination-button {
  text-decoration: none;
}

.pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover .pagination-button {
  background-color: var(--agnostic-gray-extra-light);
}

/* For ellipses like [1][2]...[3][4] */
.pagination-item-gap {
  transform: translateY(var(--fluid-6));
}

.pagination-center {
  justify-content: center;
}

.pagination-start {
  justify-content: flex-start;
}

.pagination-end {
  justify-content: flex-end;
}

</style>
import React from "react";
import { FC, ReactNode } from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

// import Highlight from "@site/src/components/Highlight";
// import High from "@site/src/components/High";

// import { Accordion, AccordionTab } from 'primereact/accordion';
// import { Card, CardProps } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { OverlayPanel } from 'primereact/overlaypanel';
// import { TabView, TabPanel } from 'primereact/tabview';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Panel } from 'primereact/panel';
// import { Fieldset } from 'primereact/fieldset';
// import { Image, ImageProps } from 'primereact/image';

// import GOverlayLink   from '@site/src/components/gcomp/GOverlayLink';
// import GTooltip       from '@site/src/components/gcomp/GTooltip';
// import GTooltipIcon   from '@site/src/components/gcomp/GTooltipIcon';
// import GMath          from '@site/src/components/gcomp/GMath';
// import GCenterImg     from '@site/src/components/gcomp/GCenterImg';
// import GSubtext     from '@site/src/components/gcomp/GSubtext';
// import G2Col     from '@site/src/components/gcomp/G2Col';
// import GSheet     from '@site/src/components/gcomp/GSheet';
// import {GTable,GTableCol,  GTableBodyCol,  GTableHeaderCol,}  from '@site/src/components/gcomp/GTable';
// import {GDataTable, GDataTable1} from '@site/src/components/gcomp/GDataTable';

// import {GChecklist}     from '@site/src/components/gcomp/GChecklist';
// import {GCallout, GMessage}     from '@site/src/components/gcomp/GMessage';

// import {GAccordion, GAccordionTab}  from '@site/src/components/gcomp/GAccordion';

// import Step from '@site/src/components/step';

// import { GCard, GChip, GComment}  from '@site/src/components/gofcomp';
// import OverlayDemo from '@site/src/components/overlayDemo';
// import OverlayDemoBasel from '@site/src/components/overlayDemoBasel';

import DocCardList from "@theme/DocCardList";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the '<Highlight>' tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  DocCardList,
  // Button,
  // Accordion,
  // AccordionTab,
  // TabView,
  // TabPanel,
  // Panel,
  // OverlayPanel,
  // // //   // OverlayDemo: GTooltipLink,
  // DataTable,
  // Column,
  // Fieldset,
  // Image,

  // Highlight,
  // High,
  // Gtooltip:GTooltip,
  // GTooltip,
  // GTooltipIcon,
  // Card: GCard,
  // GComment,
  // GAccordion,
  // GAccordionTab,
  // GDataTable,
  // GDataTable1,

  //   h1: Gh1,
  //   h2: Gh2,
  //   h3: Gh2,
  //   h4: Gh2,
  //   h5: Gh2,
  //   h6: Gh2,
  //   li: GListItem,
  //   GListItem,
  // SubText: GSubtext,
  // GCard,
  // OverlayDemo,
  // Callout: GCallout,
  // GTable,
  // GTableCol,
  // GTableBodyCol,
  // GTableHeaderCol,

  // M1: GMessage,
  // GMessage,
  // G2Col,
  // GSheet,
  // Math: GMath,
  // GMath,
  // GCenterImg,
  // CenterImg: GCenterImg,
  // Chip: GChip,
  // GChip,
  // Cmt: GComment,
  //   GComment,
  // SCard: GCard,

  // Cl: GChecklist,
  //   GTooltip,
  //   GToast,

  // GOverlayLink,
  // Step,
  // OverlayDemoBasel,
};

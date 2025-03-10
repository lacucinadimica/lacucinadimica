import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.Header({ key:"header"})],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    //Component.Breadcrumbs(),
    //Component.ArticleTitle(),
    //Component.ContentMeta(),
    //Component.TagList(),
    //Component.Search(),
    //Component.Darkmode(),
    //Component.DesktopOnly(Component.Explorer()),
  ],
  left: [
    //Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    
  ],
  right: [
  //  Component.Graph(),
  //  Component.DesktopOnly(Component.TableOfContents()),
  //  Component.Backlinks(),
  ],

};

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [],//[Component.ArticleTitle()],
  left: [],
  //  Component.PageTitle(),
  //  Component.MobileOnly(Component.Spacer()),
  //  Component.Search(),
  //  Component.Darkmode(),

  right: [],
};

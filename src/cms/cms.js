import React from 'react';
import CMS from 'netlify-cms';
import typography from '../utils/typography';
import CSSInjector from './CSSInjector';
import { css } from 'emotion';

CMS.registerPreviewStyle(typography.toString(), { raw: true });

CMS.registerEditorComponent({
  id: 'youtube',
  label: 'Youtube',
  icon: 'video',
  fields: [{ name: 'id', label: 'Youtube Video ID' }],
  pattern: /^{{<\s?youtube (\S+)\s?>}}/,
  fromBlock: function(match) {
    return {
      id: match[1],
    };
  },
  toBlock: function(obj) {
    return '{{< youtube ' + obj.id + ' >}}';
  },
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  },
});

// import { AboutPageTemplate } from 'site/templates/about-page'
// import { BlogPostTemplate } from 'site/templates/blog-post'

// const AboutPagePreview = ({ entry, widgetFor }) => (
//   <AboutPageTemplate
//     data={{ title: entry.getIn(['data', 'title']) }}
//     content={widgetFor('body')}
//   />
// )
const BlogPostPreview = ({ entry, widgetFor }) => (
  <CSSInjector>
    <h1 className={css({ color: 'red' })}>{entry.getIn(['data', 'title'])}</h1>
    <div css={{ color: 'green' }}>{entry.getIn(['data', 'description'])}</div>
    <div css={{ color: 'green' }}>{widgetFor('body')}</div>
  </CSSInjector>
  // <BlogPostTemplate
  //   content={widgetFor('body')}
  //   description={entry.getIn(['data', 'description'])}
  //   title={entry.getIn(['data', 'title'])}
  // />
);

// CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

// src/utils/analytics.js
import { Analytics } from '@vercel/analytics/react';

class AnalyticsService {
  constructor() {
    this.analytics = Analytics;
  }

  trackPageView(path) {
    this.analytics.track('pageview', {
      path,
    });
  }

  trackDownload(fileName) {
    this.analytics.track('download', {
      fileName,
    });
  }

  trackTimeSpent(page, duration) {
    this.analytics.track('timeSpent', {
      page,
      duration,
    });
  }

  trackFormSubmission(formType) {
    this.analytics.track('formSubmission', {
      formType,
    });
  }

  trackBlogMetrics(blogId, action) {
    this.analytics.track('blogInteraction', {
      blogId,
      action,
    });
  }

  trackVisitorType(type) {
    this.analytics.track('visitorType', {
      type,
    });
  }

  trackTrafficSource(source) {
    this.analytics.track('trafficSource', {
      source,
    });
  }
}

export const analyticsService = new AnalyticsService();
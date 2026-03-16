// ─── CLIENT DATA ─────────────────────────────────────────────────────────────
// In production, this would come from HubSpot CRM / API.
// For MVP pilot, we hardcode per-client data here.

export const CLIENT = {
  name: "Dr. Sarah Mitchell",
  company: "Mitchell Dental Group",
  package: "Diamond",
  am: {
    name: "Jordan Reyes",
    role: "Account Manager",
    email: "jordan@fmomedia.com",
    phone: "(516) 555-0142",
  },
  since: "January 2025",
  industry: "Medical / Dental",
};

export const PLATFORM_COLORS = {
  Facebook: "#1877F2",
  Instagram: "#E4405F",
  TikTok: "#000000",
  LinkedIn: "#0A66C2",
  YouTube: "#FF0000",
};

export const PLATFORM_ICONS = {
  Facebook: "f",
  Instagram: "◷",
  TikTok: "♪",
  LinkedIn: "in",
  YouTube: "▶",
};

// ─── KPI / ANALYTICS DATA ────────────────────────────────────────────────────
// In production, pull from platform APIs or reporting dashboard.

export const KPI_DATA = {
  Facebook: {
    followers: 4820,
    followerGrowth: 12.3,
    reach: 28400,
    engagement: 5.2,
    impressions: 72100,
    clicks: 1340,
    monthly: [
      { month: "Oct", reach: 18200, engagement: 3.8, followers: 4100 },
      { month: "Nov", reach: 21500, engagement: 4.1, followers: 4280 },
      { month: "Dec", reach: 24800, engagement: 4.6, followers: 4410 },
      { month: "Jan", reach: 26100, engagement: 4.9, followers: 4560 },
      { month: "Feb", reach: 27300, engagement: 5.0, followers: 4690 },
      { month: "Mar", reach: 28400, engagement: 5.2, followers: 4820 },
    ],
    topPosts: [
      { title: "Patient Transformation Story", type: "Video", reach: 8200, eng: 7.1 },
      { title: "Behind the Scenes: Office Tour", type: "Reel", reach: 6400, eng: 6.3 },
      { title: "Teeth Whitening Tips", type: "Carousel", reach: 5100, eng: 5.8 },
    ],
  },
  Instagram: {
    followers: 6240,
    followerGrowth: 18.7,
    reach: 35600,
    engagement: 6.8,
    impressions: 94200,
    clicks: 890,
    monthly: [
      { month: "Oct", reach: 21000, engagement: 4.2, followers: 4800 },
      { month: "Nov", reach: 25200, engagement: 5.0, followers: 5100 },
      { month: "Dec", reach: 28900, engagement: 5.6, followers: 5400 },
      { month: "Jan", reach: 31200, engagement: 6.1, followers: 5700 },
      { month: "Feb", reach: 33800, engagement: 6.5, followers: 5980 },
      { month: "Mar", reach: 35600, engagement: 6.8, followers: 6240 },
    ],
    topPosts: [
      { title: "Smile Makeover Reel", type: "Reel", reach: 12400, eng: 9.2 },
      { title: "Meet Dr. Mitchell", type: "Story Highlight", reach: 8700, eng: 7.4 },
      { title: "Before & After Carousel", type: "Carousel", reach: 7200, eng: 8.1 },
    ],
  },
  TikTok: {
    followers: 2180,
    followerGrowth: 42.5,
    reach: 89200,
    engagement: 8.4,
    impressions: 156000,
    clicks: 620,
    monthly: [
      { month: "Oct", reach: 32000, engagement: 5.1, followers: 980 },
      { month: "Nov", reach: 45000, engagement: 6.2, followers: 1200 },
      { month: "Dec", reach: 58000, engagement: 7.0, followers: 1480 },
      { month: "Jan", reach: 67000, engagement: 7.6, followers: 1700 },
      { month: "Feb", reach: 78000, engagement: 8.0, followers: 1940 },
      { month: "Mar", reach: 89200, engagement: 8.4, followers: 2180 },
    ],
    topPosts: [
      { title: "Day in the Life of a Dentist", type: "Video", reach: 34000, eng: 11.2 },
      { title: "Dental Myths Debunked", type: "Video", reach: 22000, eng: 9.8 },
      { title: "Office Dance Challenge", type: "Video", reach: 18500, eng: 10.1 },
    ],
  },
  LinkedIn: {
    followers: 1890,
    followerGrowth: 8.2,
    reach: 12400,
    engagement: 3.9,
    impressions: 31200,
    clicks: 480,
    monthly: [
      { month: "Oct", reach: 8200, engagement: 2.8, followers: 1620 },
      { month: "Nov", reach: 9100, engagement: 3.0, followers: 1680 },
      { month: "Dec", reach: 10200, engagement: 3.3, followers: 1740 },
      { month: "Jan", reach: 11000, engagement: 3.5, followers: 1790 },
      { month: "Feb", reach: 11800, engagement: 3.7, followers: 1840 },
      { month: "Mar", reach: 12400, engagement: 3.9, followers: 1890 },
    ],
    topPosts: [
      { title: "Practice Growth Story", type: "Article", reach: 4200, eng: 5.1 },
      { title: "Hiring Announcement", type: "Post", reach: 3800, eng: 4.6 },
      { title: "Industry Conference Recap", type: "Post", reach: 3100, eng: 4.2 },
    ],
  },
  YouTube: {
    followers: 890,
    followerGrowth: 22.1,
    reach: 18600,
    engagement: 4.6,
    impressions: 42000,
    clicks: 1100,
    monthly: [
      { month: "Oct", reach: 8400, engagement: 3.0, followers: 540 },
      { month: "Nov", reach: 10200, engagement: 3.4, followers: 610 },
      { month: "Dec", reach: 12800, engagement: 3.8, followers: 680 },
      { month: "Jan", reach: 14600, engagement: 4.0, followers: 740 },
      { month: "Feb", reach: 16800, engagement: 4.3, followers: 820 },
      { month: "Mar", reach: 18600, engagement: 4.6, followers: 890 },
    ],
    topPosts: [
      { title: "Complete Smile Makeover Journey", type: "Long-form", reach: 6200, eng: 6.8 },
      { title: "Dental Hygiene 101", type: "Short", reach: 4800, eng: 5.4 },
      { title: "Patient Q&A Session", type: "Live", reach: 3400, eng: 7.2 },
    ],
  },
};

// ─── DELIVERABLES PER TIER ───────────────────────────────────────────────────

export const DELIVERABLES = {
  Gold: [
    { item: "Social Media Posts", qty: "12/month", platforms: "2 platforms" },
    { item: "Content Photography", qty: "1 session/quarter", platforms: "On-site" },
    { item: "Monthly Report", qty: "1/month", platforms: "All platforms" },
    { item: "Strategy Call", qty: "1/month", platforms: "30 min" },
  ],
  Emerald: [
    { item: "Social Media Posts", qty: "20/month", platforms: "3 platforms" },
    { item: "Video Content", qty: "2/month", platforms: "Reels + TikTok" },
    { item: "Content Photography", qty: "1 session/month", platforms: "On-site" },
    { item: "Monthly Report", qty: "1/month", platforms: "All platforms" },
    { item: "Strategy Call", qty: "2/month", platforms: "30 min each" },
    { item: "Blog Articles", qty: "2/month", platforms: "Website" },
  ],
  Diamond: [
    { item: "Social Media Posts", qty: "30/month", platforms: "5 platforms" },
    { item: "Video Content", qty: "4/month", platforms: "Reels, TikTok, YouTube" },
    { item: "Content Photography", qty: "2 sessions/month", platforms: "On-site" },
    { item: "Monthly Report", qty: "2/month", platforms: "All platforms + deep dive" },
    { item: "Strategy Call", qty: "Weekly", platforms: "45 min" },
    { item: "Blog Articles", qty: "4/month", platforms: "Website + LinkedIn" },
    { item: "Email Campaigns", qty: "2/month", platforms: "HubSpot" },
    { item: "Paid Ad Management", qty: "Ongoing", platforms: "Meta + Google" },
  ],
};

export const SLA = {
  Gold: { response: "24 hours", revision: "48 hours", report: "By 10th of month" },
  Emerald: { response: "12 hours", revision: "24 hours", report: "By 7th of month" },
  Diamond: { response: "4 hours", revision: "12 hours", report: "By 5th of month" },
};

// ─── FAQ DATA ────────────────────────────────────────────────────────────────

export const FAQ_DATA = [
  { q: "How do I request a revision on a post?", a: "Reply directly to the content approval email or message your AM on Slack. Include specific feedback on what you'd like changed. Revisions are typically turned around within your SLA window.", category: "Content" },
  { q: "When will I receive my monthly report?", a: "Reports are delivered based on your package tier — Gold by the 10th, Emerald by the 7th, Diamond by the 5th of each month. You'll receive it via email with a link to the full dashboard.", category: "Reporting" },
  { q: "How do I submit brand assets or photos?", a: "Use the Asset Upload tab in this portal. You can drag and drop files up to 500MB. For large batches, your AM can provide a shared Google Drive folder.", category: "Assets" },
  { q: "Can I change my posting schedule?", a: "Yes — reach out to your AM at least 5 business days before the next content cycle. Changes to posting cadence may require a strategy adjustment call.", category: "Content" },
  { q: "What's included in my package?", a: "Check the Deliverables tab for a full breakdown of what's included in your specific tier. Your AM can also walk you through any questions during your next strategy call.", category: "Account" },
  { q: "How do I escalate an issue?", a: "Start with your AM. If unresolved within 24 hours, contact the Client Services team at support@fmomedia.com or call (516) 555-0100. The Communication tab has the full escalation path.", category: "Support" },
  { q: "Can I approve content before it goes live?", a: "Absolutely. All content is sent for approval before posting. You'll receive a content approval email with previews. Diamond clients also get access to a shared content calendar.", category: "Content" },
  { q: "How are KPIs measured?", a: "We track platform-native analytics including reach, engagement rate, follower growth, impressions, and click-throughs. Check the Reporting tab for definitions of each metric.", category: "Reporting" },
  { q: "What if I need to pause my account?", a: "Contact your AM to discuss options. We offer account pauses of up to 60 days depending on your contract terms. A brief call is required to coordinate the pause.", category: "Account" },
  { q: "How quickly will my AM respond?", a: "Response times are based on your package: Diamond within 4 hours, Emerald within 12 hours, Gold within 24 hours during business days (Mon–Fri, 9am–6pm ET).", category: "Support" },
];

export const TURNAROUND = [
  { task: "Social media post creation", time: "3–5 business days" },
  { task: "Video editing (short-form)", time: "5–7 business days" },
  { task: "Video editing (long-form)", time: "7–10 business days" },
  { task: "Blog article", time: "5–7 business days" },
  { task: "Content revision (minor)", time: "Within SLA window" },
  { task: "Content revision (major)", time: "2–3 business days" },
  { task: "Brand photography session", time: "Scheduled 2 weeks out" },
  { task: "Monthly report delivery", time: "Per SLA schedule" },
  { task: "Ad campaign launch", time: "5–7 business days from approval" },
  { task: "Emergency/rush content", time: "24–48 hours (Diamond only)" },
];

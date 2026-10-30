import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '3cd2072f672b81e3973cc588bb942999',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Prep-blog',
  domain: 'harrishleth.in',
  author: 'Harrish Raj',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'transitive_bs',
  github: 'transitive-bullshit',
  linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  pageUrlOverrides: {
    // ===== Master Index =====
    '/interview-prep-master-index': '3cd2072f672b81e3973cc588bb942999',

    // ===== Arctic Wolf (company) =====
    '/arctic-wolf-sr-information-security-engineer': '4082072f672b81c6b747c069c3ba676e',
    '/arctic-wolf-round-1-cracking-the-first-round': '4082072f672b81d89afee394d17d0776',
    '/arctic-wolf-a0-understand-it-first': '4082072f672b81dbbf89f7e6cfe3f273',
    '/arctic-wolf-a1-jd-decoded': '4082072f672b816fa745d609bc16dbbe',
    '/arctic-wolf-a2-network-security-tooling': '4082072f672b8195b7d9f331bf2189e2',
    '/arctic-wolf-a3-endpoint-security-edr': '4082072f672b81f4adf3c5ce655f23d7',
    '/arctic-wolf-a4-deploying-operating-integrating-tooling': '4082072f672b810fb757c0b2e5040ba9',
    '/arctic-wolf-a5-linux-systems-administration': '4082072f672b81c28c43f5546117b085',
    '/arctic-wolf-a6-scripting-api-integration': '4082072f672b818ba7e9ff57d29808a5',
    '/arctic-wolf-a7-cloud-aws': '4082072f672b817da770fb9716037400',
    '/arctic-wolf-a8-company-context': '4082072f672b8174a59dfab1519124ee',
    '/arctic-wolf-a9-quiz-bank-mock-scenarios': '4082072f672b8171b2c4da6c330dea15',
    '/arctic-wolf-a10-gap-closing-labs-glossary': '4082072f672b81ae9382d99246881634',

    // ===== Skylo (company) =====
    '/skylo-technologies-sr-cloud-security-engineer': '4082072f672b8110bcb1f9a75f938958',
    '/skylo-round-1-cracking-the-first-round': '4072072f672b81aa873ce7c478b11d66',
    '/skylo-s0-understand-it-first': '4022072f672b8195876fdcdf895d934b',
    '/skylo-s1-jd-decoded': '4022072f672b8103a614e75059e1c28e',
    '/skylo-s2-cloud-iam-network-secrets-kms': '4022072f672b8121b0fcf8a6f11b0389',
    '/skylo-s3-cspm-cnapp-cloud-posture': '4022072f672b814a8928d69eecfbb2f2',
    '/skylo-s4-kubernetes-container-security': '4022072f672b81638333d54228e0e9ea',
    '/skylo-s5-iac-devsecops': '4022072f672b81d28a18f228bc31f5ba',
    '/skylo-s6-cloud-vulnerability-management': '4022072f672b8126aecaec858fe823e3',
    '/skylo-s7-cloud-detection-ir-forensics': '4022072f672b810bbdd8ded091103a13',
    '/skylo-s8-threat-modeling': '4022072f672b81229f41d6054a7885cf',
    '/skylo-s9-satellite-telco-ntn-context': '4022072f672b810eb5f6c8db4b2026bc',
    '/skylo-s10-gap-closing-plan-labs': '4022072f672b81ff929cfeeec63411b5',
    '/skylo-s11-quiz-bank-mock-scenarios': '4022072f672b812486e8df71f7b3145f',
    '/skylo-s12-glossary-fast-reference': '4022072f672b81308cc6e56cd23c8f47',

    // ===== Archived (parent) =====
    '/archived-earlier-interview-prep': '4082072f672b81d294d3fff430b41b15',

    // ----- Rockstar (archived company) -----
    '/rockstar-games-vulnerability-management': '4082072f672b81c2b9b7e12a15ba27de',
    '/rockstar-0-understand-it-first': '3df2072f672b813fa12dca77535c1a1f',
    '/rockstar-24-jd-targeted-prep': '3dd2072f672b81e68ea7f739d286a866',
    '/rockstar-25-tenable-deep-dive-i': '3dd2072f672b81a78d2dc59fe40021d9',
    '/rockstar-26-tenable-deep-dive-ii': '3dd2072f672b81968731f837e190c56a',
    '/rockstar-27-tenable-deep-dive-iii': '3dd2072f672b81a1b921c717edaa134b',
    '/rockstar-28-diagrams-visual-reference': '3dd2072f672b81599580c1056fa0c7e7',
    '/rockstar-29-quiz-bank': '3dd2072f672b81c0ab2aff1c16b5b7a2',
    '/rockstar-30-networking-scan-troubleshooting': '3df2072f672b816b8340c0300d476b2f',
    '/rockstar-31-windows-linux-internals': '3df2072f672b8163894ae964a932c4c5',
    '/rockstar-32-vulnerability-ecosystem': '3df2072f672b8182832cc41162c65b0b',
    '/rockstar-33-asset-management-coverage': '3df2072f672b8166aeffcda760a5f617',
    '/rockstar-34-integrations-workflow-platforms': '3df2072f672b81c0aa13e1653590bfae',
    '/rockstar-35-gaming-industry-context': '3df2072f672b8140a4c9e5db0090e228',
    '/rockstar-36-glossary': '3df2072f672b8135b700dd042e9dd860',

    // ----- Tekion / Offensive (archived company) -----
    '/tekion-offensive-security': '4082072f672b8119bd27e18c3e6de684',
    '/tekion-1-cloud-security-architecture': '3cd2072f672b81ea972ec230a6150b04',
    '/tekion-2-detection-engineering-cdr': '3cd2072f672b81fca3dbf4292d449350',
    '/tekion-3-vapt-application-api-security': '3cd2072f672b8179a494d5df2d07662a',
    '/tekion-4-grc-risk-compliance': '3cd2072f672b8161bb8dcb98de427181',
    '/tekion-5-cryptography-identity': '3cd2072f672b81719ceafc568b5b5043',
    '/tekion-6-containers-kubernetes': '3cd2072f672b81e7a79febd7e7e3b7be',
    '/tekion-7-behavioral-leadership-prep': '3cd2072f672b81f78a9af0c0dda8738a',
    '/tekion-8-network-endpoint-email-security': '3cd2072f672b814fab70f39d77c2370c',
    '/tekion-9-incident-response-forensics': '3cd2072f672b816ba784ccc7598f5a4d',
    '/tekion-10-devsecops-secure-sdlc': '3cd2072f672b81fdb7b8c0e92e265384',
    '/tekion-11-threat-intelligence-soc-metrics': '3cd2072f672b81f88167e702287bebc4',
    '/tekion-12-interview-meta-prep': '3cd2072f672b81d68405cfc283d33dee',
    '/tekion-13-jd-targeted-prep': '3cd2072f672b81a19b4aeef97cb3b02e',
    '/tekion-14-threat-modeling-design-review': '3cd2072f672b8198845be3c36fa10a12',
    '/tekion-15-cloud-security-services-hardening': '3cf2072f672b8101ba63cd98a4d54afc',
    '/tekion-16-security-tools-deep-dive': '3cf2072f672b810caecec4098497381a',
    '/tekion-17-internal-pentest-ad-attacks': '3d12072f672b81b5b66ae2799aa0a219',
    '/tekion-18-red-teaming-adversary-emulation': '3d12072f672b810ab27ac647f8675103',
    '/tekion-19-vulnerability-research-exploit-dev': '3d12072f672b8194a06ac5e32b6716c5',
    '/tekion-20-software-cloud-red-teaming': '3d32072f672b819b9e59d54201dc2e14',
    '/tekion-21-ai-offensive-security': '3d12072f672b81258691d16752b47f86',
    '/tekion-appendix-iot-hardware-threat-modeling': '3d12072f672b8132913efb79f50e3d73',
    '/tekion-22-round-2-preparation-toolkit': '3d32072f672b813db6ecc4b8c1ad4c0c',
    '/tekion-23-offensive-tooling-arsenal': '3d32072f672b81a6b795c426034a7b65'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
})

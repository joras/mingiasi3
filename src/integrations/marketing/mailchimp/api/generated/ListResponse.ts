import { z } from "zod";

export default z
  .object({
    id: z.string().describe("A string that uniquely identifies this list."),
    web_id: z
      .number()
      .int()
      .describe(
        "The ID used in the Mailchimp web application. View this list in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/?id={web_id}`.",
      )
      .optional(),
    name: z.string().describe("The name of the list.").optional(),
    contact: z
      .object({
        company: z
          .string()
          .describe("The company name for the list.")
          .optional(),
        address1: z
          .string()
          .describe("The street address for the list contact.")
          .optional(),
        address2: z
          .string()
          .describe("The street address for the list contact.")
          .optional(),
        city: z.string().describe("The city for the list contact.").optional(),
        state: z
          .string()
          .describe("The state for the list contact.")
          .optional(),
        zip: z
          .string()
          .describe("The postal or zip code for the list contact.")
          .optional(),
        country: z
          .string()
          .describe(
            "A two-character ISO3166 country code. Defaults to US if invalid.",
          )
          .optional(),
        phone: z
          .string()
          .describe("The phone number for the list contact.")
          .optional(),
      })
      .describe(
        "[Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.",
      )
      .optional(),
    permission_reminder: z
      .string()
      .describe(
        "The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.",
      )
      .optional(),
    use_archive_bar: z
      .boolean()
      .describe(
        "Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.",
      )
      .default(false),
    campaign_defaults: z
      .object({
        from_name: z
          .string()
          .describe("The default from name for campaigns sent to this list.")
          .optional(),
        from_email: z
          .string()
          .describe("The default from email for campaigns sent to this list.")
          .optional(),
        subject: z
          .string()
          .describe("The default subject line for campaigns sent to this list.")
          .optional(),
        language: z
          .string()
          .describe("The default language for this lists's forms.")
          .optional(),
      })
      .describe(
        "[Default values for campaigns](https://mailchimp.com/help/edit-your-emails-subject-preview-text-from-name-or-from-email-address/) created for this list.",
      )
      .optional(),
    notify_on_subscribe: z
      .string()
      .describe(
        "The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.",
      )
      .optional(),
    notify_on_unsubscribe: z
      .string()
      .describe(
        "The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.",
      )
      .optional(),
    date_created: z
      .string()
      .datetime({ offset: true })
      .describe(
        "The date and time that this list was created in ISO 8601 format.",
      )
      .optional(),
    list_rating: z
      .number()
      .int()
      .describe("An auto-generated activity score for the list (0-5).")
      .optional(),
    email_type_option: z
      .boolean()
      .describe(
        "Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.",
      )
      .optional(),
    subscribe_url_short: z
      .string()
      .describe(
        "Our [url shortened](https://mailchimp.com/help/share-your-signup-form/) version of this list's subscribe form.",
      )
      .optional(),
    subscribe_url_long: z
      .string()
      .describe(
        "The full version of this list's subscribe form (host will vary).",
      )
      .optional(),
    beamer_address: z
      .string()
      .describe(
        "The list's [Email Beamer](https://mailchimp.com/help/use-email-beamer-to-create-a-campaign/) address.",
      )
      .optional(),
    visibility: z
      .enum(["pub", "prv"])
      .describe("Legacy - visibility settings are no longer used")
      .optional(),
    double_optin: z
      .boolean()
      .describe(
        "Whether or not to require the subscriber to confirm subscription via email.",
      )
      .default(false),
    has_welcome: z
      .boolean()
      .describe(
        "Whether or not this list has a welcome automation connected. Welcome Automations: welcomeSeries, singleWelcome, emailFollowup.",
      )
      .default(false),
    marketing_permissions: z
      .boolean()
      .describe(
        "Whether or not the list has marketing permissions (eg. GDPR) enabled.",
      )
      .default(false),
    modules: z
      .array(z.string())
      .describe("Any list-specific modules installed for this list.")
      .optional(),
    stats: z
      .object({
        member_count: z
          .number()
          .int()
          .describe("The number of active members in the list.")
          .optional(),
        total_contacts: z
          .number()
          .int()
          .describe(
            "The number of contacts in the list, including subscribed, unsubscribed, pending, cleaned, deleted, transactional, and those that need to be reconfirmed. Requires include_total_contacts query parameter to be included.",
          )
          .optional(),
        unsubscribe_count: z
          .number()
          .int()
          .describe(
            "The number of members who have unsubscribed from the list.",
          )
          .optional(),
        cleaned_count: z
          .number()
          .int()
          .describe("The number of members cleaned from the list.")
          .optional(),
        member_count_since_send: z
          .number()
          .int()
          .describe(
            "The number of active members in the list since the last campaign was sent.",
          )
          .optional(),
        unsubscribe_count_since_send: z
          .number()
          .int()
          .describe(
            "The number of members who have unsubscribed since the last campaign was sent.",
          )
          .optional(),
        cleaned_count_since_send: z
          .number()
          .int()
          .describe(
            "The number of members cleaned from the list since the last campaign was sent.",
          )
          .optional(),
        campaign_count: z
          .number()
          .int()
          .describe("The number of campaigns in any status that use this list.")
          .optional(),
        campaign_last_sent: z
          .string()
          .datetime({ offset: true })
          .or(z.string())
          .describe(
            "The date and time the last campaign was sent to this list in ISO 8601 format. This is updated when a campaign is sent to 10 or more recipients.",
          )
          .optional(),
        merge_field_count: z
          .number()
          .int()
          .describe(
            "The number of merge fields ([audience field](https://mailchimp.com/help/getting-started-with-merge-tags/)) for this list (doesn't include EMAIL).",
          )
          .optional(),
        avg_sub_rate: z
          .number()
          .describe(
            "The average number of subscriptions per month for the list (not returned if we haven't calculated it yet).",
          )
          .optional(),
        avg_unsub_rate: z
          .number()
          .describe(
            "The average number of unsubscriptions per month for the list (not returned if we haven't calculated it yet).",
          )
          .optional(),
        target_sub_rate: z
          .number()
          .describe(
            "The target number of subscriptions per month for the list to keep it growing (not returned if we haven't calculated it yet).",
          )
          .optional(),
        open_rate: z
          .number()
          .describe(
            "The average open rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).",
          )
          .optional(),
        click_rate: z
          .number()
          .describe(
            "The average click rate (a percentage represented as a number between 0 and 100) per campaign for the list (not returned if we haven't calculated it yet).",
          )
          .optional(),
        last_sub_date: z
          .string()
          .datetime({ offset: true })
          .describe(
            "The date and time of the last time someone subscribed to this list in ISO 8601 format.",
          )
          .optional(),
        last_unsub_date: z
          .string()
          .datetime({ offset: true })
          .or(z.string())
          .describe(
            "The date and time of the last time someone unsubscribed from this list in ISO 8601 format.",
          )
          .optional(),
      })
      .describe(
        "Stats for the list. Many of these are cached for at least five minutes.",
      )
      .optional(),
    _links: z.any().optional(),
  })
  .describe("Information about a specific list.");

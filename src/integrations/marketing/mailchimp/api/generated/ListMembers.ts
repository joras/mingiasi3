import { z } from "zod";

export default z
  .object({
    id: z
      .string()
      .describe(
        "The MD5 hash of the lowercase version of the list member's email address.",
      ),
    email_address: z.string().describe("Email address for a subscriber."),
    unique_email_id: z
      .string()
      .describe("An identifier for the address across all of Mailchimp.")
      .optional(),
    contact_id: z
      .string()
      .describe(
        "As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.",
      )
      .optional(),
    full_name: z.string().describe("The contact's full name.").optional(),
    web_id: z
      .number()
      .int()
      .describe(
        "The ID used in the Mailchimp web application. View this member in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/view?id={web_id}`.",
      )
      .optional(),
    email_type: z
      .string()
      .describe("Type of email this member asked to get ('html' or 'text').")
      .optional(),
    status: z
      .enum([
        "subscribed",
        "unsubscribed",
        "cleaned",
        "pending",
        "transactional",
        "archived",
      ])
      .describe("Subscriber's current status.")
      .optional(),
    unsubscribe_reason: z
      .string()
      .describe("A subscriber's reason for unsubscribing.")
      .optional(),
    consents_to_one_to_one_messaging: z
      .boolean()
      .describe("Indicates whether a contact consents to 1:1 messaging.")
      .optional(),
    merge_fields: z.any().optional(),
    interests: z
      .record(
        z
          .boolean()
          .describe(
            "Keys are interest IDs, values are booleans that describe whether the list member is in that group or not.",
          ),
      )
      .describe(
        "The key of this object's properties is the ID of the interest in question.",
      )
      .optional(),
    stats: z
      .object({
        avg_open_rate: z
          .number()
          .describe("A subscriber's average open rate.")
          .optional(),
        avg_click_rate: z
          .number()
          .describe("A subscriber's average clickthrough rate.")
          .optional(),
        ecommerce_data: z
          .object({
            total_revenue: z
              .number()
              .describe("The total revenue the list member has brought in.")
              .optional(),
            number_of_orders: z
              .number()
              .describe("The total number of orders placed by the list member.")
              .optional(),
            currency_code: z
              .string()
              .describe(
                "The three-letter ISO 4217 code for the currency that the store accepts.",
              )
              .optional(),
          })
          .describe(
            "Ecommerce stats for the list member if the list is attached to a store.",
          )
          .optional(),
      })
      .describe("Open and click rates for this subscriber.")
      .optional(),
    ip_signup: z
      .string()
      .describe("IP address the subscriber signed up from.")
      .optional(),
    timestamp_signup: z
      .string()
      .datetime({ offset: true })
      .or(z.string())
      .describe(
        "The date and time the subscriber signed up for the list in ISO 8601 format.",
      )
      .optional(),
    ip_opt: z
      .string()
      .describe(
        "The IP address the subscriber used to confirm their opt-in status.",
      )
      .optional(),
    timestamp_opt: z
      .string()
      .datetime({ offset: true })
      .describe(
        "The date and time the subscriber confirmed their opt-in status in ISO 8601 format.",
      )
      .optional(),
    member_rating: z
      .number()
      .int()
      .describe("Star rating for this member, between 1 and 5.")
      .optional(),
    last_changed: z
      .string()
      .datetime({ offset: true })
      .describe(
        "The date and time the member's info was last changed in ISO 8601 format.",
      )
      .optional(),
    language: z
      .string()
      .describe(
        "If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/).",
      )
      .optional(),
    vip: z
      .boolean()
      .describe(
        "[VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.",
      )
      .optional(),
    email_client: z
      .string()
      .describe("The list member's email client.")
      .optional(),
    location: z
      .object({
        latitude: z.number().describe("The location latitude.").optional(),
        longitude: z.number().describe("The location longitude.").optional(),
        gmtoff: z
          .number()
          .int()
          .describe("The time difference in hours from GMT.")
          .optional(),
        dstoff: z
          .number()
          .int()
          .describe(
            "The offset for timezones where daylight saving time is observed.",
          )
          .optional(),
        country_code: z
          .string()
          .describe("The unique code for the location country.")
          .optional(),
        timezone: z
          .string()
          .describe("The timezone for the location.")
          .optional(),
        region: z.string().describe("The region for the location.").optional(),
      })
      .describe("Subscriber location information.")
      .optional(),
    marketing_permissions: z
      .array(
        z
          .object({
            marketing_permission_id: z
              .string()
              .describe("The id for the marketing permission on the list")
              .optional(),
            text: z
              .string()
              .describe("The text of the marketing permission.")
              .optional(),
            enabled: z
              .boolean()
              .describe(
                "If the subscriber has opted-in to the marketing permission.",
              )
              .optional(),
          })
          .describe(
            "A single marketing permission a subscriber has either opted-in to or opted-out of.",
          ),
      )
      .describe("The marketing permissions for the subscriber.")
      .optional(),
    last_note: z
      .object({
        note_id: z.number().int().describe("The note id.").optional(),
        created_at: z
          .string()
          .datetime({ offset: true })
          .describe(
            "The date and time the note was created in ISO 8601 format.",
          )
          .optional(),
        created_by: z.string().describe("The author of the note.").optional(),
        note: z.string().describe("The content of the note.").optional(),
      })
      .describe("The most recent Note added about this member.")
      .optional(),
    source: z
      .string()
      .describe("The source from which the subscriber was added to this list.")
      .optional(),
    tags_count: z
      .number()
      .int()
      .describe("The number of tags applied to this member.")
      .optional(),
    tags: z
      .array(
        z.object({
          id: z.number().int().describe("The tag id.").optional(),
          name: z.string().describe("The name of the tag").optional(),
        }),
      )
      .describe(
        "Returns up to 50 tags applied to this member. To retrieve all tags see [Member Tags](https://mailchimp.com/developer/marketing/api/list-member-tags/).",
      )
      .optional(),
    list_id: z.string().describe("The list id.").optional(),
    _links: z.any().optional(),
  })
  .describe(
    "Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.",
  );

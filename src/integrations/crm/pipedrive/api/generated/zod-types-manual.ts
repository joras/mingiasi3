import { z } from "zod";

// this file contains subset of generated zod types
// the generated file is too big and types to complex to my old computer to handle

export const Person = z.intersection(
  z.object({
    id: z.number().int(),
    company_id: z.number().int().optional(),
    active_flag: z.boolean().optional(),
    phone: z
      .array(
        z.object({
          value: z.string().optional(),
          primary: z.boolean().optional(),
          label: z.string().optional(),
        }),
      )
      .optional(),
    email: z.array(
      z.object({
        value: z.string(),
        primary: z.boolean().optional(),
        label: z.string().optional(),
      }),
    ),
    first_char: z.string().optional(),
    add_time: z.string().optional(),
    update_time: z.string().optional(),
    visible_to: z.string().optional(),
    picture_id: z
      .intersection(
        z.object({
          id: z.number().int().optional(),
        }),
        z.object({
          item_type: z.string().optional(),
          item_id: z.number().int().optional(),
          active_flag: z.boolean().optional(),
          add_time: z.string().optional(),
          update_time: z.string().optional(),
          added_by_user_id: z.number().int().optional(),
          pictures: z
            .object({
              128: z.string().optional(),
              512: z.string().optional(),
            })
            .optional(),
        }),
      )
      .optional()
      .nullable(),
    label: z.number().int().optional().nullable(),
    org_name: z.string().optional(),
    owner_name: z.string().optional(),
    cc_email: z.string().optional(),
  }),
  z.intersection(
    z.intersection(
      z.object({
        owner_id: z
          .intersection(
            z.object({
              id: z.number().int().optional(),
              name: z.string().optional(),
              email: z.string().optional(),
              has_pic: z.number().int().optional(),
              pic_hash: z.string().nullable().optional(),
              active_flag: z.boolean().optional(),
            }),
            z.object({
              value: z.number().int().optional(),
            }),
          )
          .optional(),
        org_id: z
          .intersection(
            z.intersection(
              z.object({
                name: z.string().optional(),
                people_count: z.number().int().optional(),
                owner_id: z.number().int().optional(),
                address: z.string().optional(),
                cc_email: z.string().optional(),
              }),
              z.object({
                value: z.number().int().optional(),
              }),
            ),
            z.object({
              active_flag: z.boolean().optional(),
            }),
          )
          .optional(),
      }),
      z.object({
        name: z.string().optional(),
        first_name: z.string(),
        last_name: z.string(),
      }),
    ),
    z.intersection(
      z.intersection(
        z.object({
          email_messages_count: z.number().int().optional(),
          activities_count: z.number().int().optional(),
          done_activities_count: z.number().int().optional(),
          undone_activities_count: z.number().int().optional(),
          files_count: z.number().int().optional(),
          notes_count: z.number().int().optional(),
          followers_count: z.number().int().optional(),
        }),
        z.object({
          last_incoming_mail_time: z.string().optional().nullable(),
          last_outgoing_mail_time: z.string().optional().nullable(),
        }),
      ),
      z.intersection(
        z.object({
          open_deals_count: z.number().int().optional(),
          related_open_deals_count: z.number().int().optional(),
          closed_deals_count: z.number().int().optional(),
          related_closed_deals_count: z.number().int().optional(),
          won_deals_count: z.number().int().optional(),
          related_won_deals_count: z.number().int().optional(),
          lost_deals_count: z.number().int().optional(),
          related_lost_deals_count: z.number().int().optional(),
        }),
        z.object({
          next_activity_date: z.string().nullable().optional(),
          next_activity_time: z.string().nullable().optional(),
          next_activity_id: z.number().int().nullable().optional(),
          last_activity_id: z.number().int().nullable().optional(),
          last_activity_date: z.string().nullable().optional(),
        }),
      ),
    ),
  ),
);

export const PersonResponse = z.intersection(
  z.object({
    success: z.boolean().optional(),
  }),
  z.object({
    data: z.array(Person).optional(),
    additional_data: z
      .object({
        pagination: z
          .object({
            start: z.number().int().optional(),
            limit: z.number().int().optional(),
            more_items_in_collection: z.boolean().optional(),
            next_start: z.number().int().optional(),
          })
          .optional(),
      })
      .optional(),
    related_objects: z
      .object({
        organization: z
          .object({
            ORGANIZATION_ID: z
              .intersection(
                z.object({
                  id: z.number().int().optional(),
                }),
                z.object({
                  name: z.string().optional(),
                  people_count: z.number().int().optional(),
                  owner_id: z.number().int().optional(),
                  address: z.string().optional(),
                  cc_email: z.string().optional(),
                }),
              )
              .optional(),
          })
          .optional(),
        user: z
          .object({
            USER_ID: z
              .intersection(
                z.object({
                  id: z.number().int().optional(),
                  name: z.string().optional(),
                  email: z.string().optional(),
                  has_pic: z.number().int().optional(),
                  pic_hash: z.string().nullable().optional(),
                  active_flag: z.boolean().optional(),
                }),
                z.record(z.any()),
              )
              .optional(),
          })
          .optional(),
        picture: z
          .object({
            PICTURE_ID: z
              .intersection(
                z.object({
                  id: z.number().int().optional(),
                }),
                z.object({
                  item_type: z.string().optional(),
                  item_id: z.number().int().optional(),
                  active_flag: z.boolean().optional(),
                  add_time: z.string().optional(),
                  update_time: z.string().optional(),
                  added_by_user_id: z.number().int().optional(),
                  pictures: z
                    .object({
                      128: z.string().optional(),
                      512: z.string().optional(),
                    })
                    .optional(),
                }),
              )
              .optional(),
          })
          .optional(),
      })
      .optional(),
  }),
);

export default class Endpoints {
  /**
   * `/channels/${channelID}`
   * - GET
   * - PATCH
   * - DELETE
   */
  public static CHANNEL(channelID: string) {
    return `/channels/${channelID}`;
  }
  /**
   * `/channels/${channelID}/messages`
   * - GET
   * - POST
   */
  public static CHANNEL_MESSAGES(channelID: string) {
    return `/channels/${channelID}/messages`;
  }
  /**
   * `/channels/${channelID}/messages/${messageID}`
   * - GET
   * - PATCH
   * - DELETE
   */
  public static CHANNEL_MESSAGE(channelID: string, messageID: string) {
    return `/channels/${channelID}/messages/${messageID}`;
  }
  /**
   * `/channels/${channelID}/messages/${messageID}/reactions/${reaction}/${userID}`
   * - PUT
   * - DELETE
   */
  public static CHANNEL_MESSAGE_USER_REACTION(channelID: string, messageID: string, reaction: string, userID: string) {
    return `/channels/${channelID}/messages/${messageID}/reactions/${reaction}/${userID}`;
  }
  /**
    * `/channels/${channelID}/messages/${messageID}/reactions/${reaction}`
    * - GET
    * - DELETE
    */
  public static CHANNEL_MESSAGE_REACTION(channelID: string, messageID: string, reaction: string) {
    return `/channels/${channelID}/messages/${messageID}/reactions/${reaction}`;
  }
  /**
   * `/channels/${channelID}/messages/${messageID}/reactions`
   * - DELETE
   */
  public static CHANNEL_MESSAGE_REACTIONS(channelID: string, messageID: string) {
    return `/channels/${channelID}/messages/${messageID}/reactions`;
  }
  /**
   * `/channels/${channelID}/bulk-delete`
   * - POST
   */
  public static CHANNEL_MESSAGES_BULK_DELETE(channelID: string) {
    return `/channels/${channelID}/messages/bulk-delete`;
  }
  /**
    * `/channels/${channelID}/permissions/${overwriteID}`
    * - PUT
    * - DELETE
    */
  public static CHANNEL_OVERWRITE_PERMISSIONS(channelID, overwriteID) {
    return `/channels/${channelID}/permissions/${overwriteID}`;
  }
  /**
    * `/channels/${channelID}/invites`
    * - GET
    * - POST
    */
  public static CHANNEL_INVITES(channelID: string) {
    return `/channels/${channelID}/invites`;
  }
  /**
    * `/channels/${channelID}/typing`
    * - POST
    */
  public static CHANNEL_TYPING(channelID: string) {
    return `/channels/${channelID}/typing`;
  }
  /**
    * `/channels/${channelID}/pins`
    * - GET
    */
  public static CHANNEL_PINNED_MESSAGES(channelID: string) {
    return `/channels/${channelID}/pins`;
  }
  /**
    * `/channels/${channelID}/pins/${messageID}`
    * - PUT
    * - DELETE
    */
  public static CHANNEL_PINNED_MESSAGE(channelID: string, messageID: string) {
    return `/channels/${channelID}/pins/${messageID}`;
  }

  /**
   * `/guilds/${guildID}`
   * - POST
   */
  public static GUILDS() {
    return '/guilds/';
  }

  /**
   * `/guilds/${guildID}`
   * - GET
   * - PATCH
   * - DELETE
   */
  public static GUILD(guildID: string) {
    return `/guilds/${guildID}`;
  }

  /**
   * `/guilds/${guildID}/preview`
   * - GET
   */
  public static GUILD_PREVIEW(guildID: string) {
    return `/guilds/${guildID}/preview`;
  }

  /**
   * `/guilds/${guildID}/channels`
   * - POST
   * - PATCH
   */
  public static GUILD_CHANNEL(guildID: string) {
    return `/guilds/${guildID}/channels`;
  }

  /**
   * `/guilds/${guildID}/members/${userID}`
   * - GET
   * - PUT
   * - PATCH
   * - DELETE
   */
  public static GUILD_MEMBER(guildID: string, userID: string) {
    return `/guilds/${guildID}/members/${userID}`;
  }

  /**
   * `/guilds/${guildID}/members`
   * - GET
   */
  public static GUILD_MEMBERS(guildID: string) {
    return `/guilds/${guildID}/members`;
  }

  /**
   * `/guilds/${guildID}/members/@me/nick`
   * - PATCH
   */
  public static SELF_GUILD_NICK(guildID: string) {
    return `/guilds/${guildID}/members/@me/nick`;
  }

  /**
   * `/guilds/${guildID}/members/${userID}/roles/${roleID}`
   * - PUT
   * - DELETE
   */
  public static GUILD_MEMBER_ROLE(guildID: string, userID: string, roleID: string) {
    return `/guilds/${guildID}/members/${userID}/roles/${roleID}`;
  }

  /**
   * `/guilds/${guildID}/bans`
   * - GET
   */
  public static GUILD_BANS(guildID: string) {
    return `/guilds/${guildID}/bans`;
  }

  /**
   * `/guilds/${guildID}/bans/${userID}`
   * - GET
   * - PUT
   * - DELETE
   */
  public static GUILD_BAN(guildID: string, userID: string) {
    return `/guilds/${guildID}/bans/${userID}`;
  }

  /**
   * `/guilds/${guildID}/roles`
   * - GET
   * - POST
   * - PATCH
   */
  public static GUILD_ROLES(guildID: string) {
    return `/guilds/${guildID}/roles`;
  }

  /**
   * `/guilds/${guildID}/roles/${roleID}`
   * - PATCH
   * - DELETE
   */
  public static GUILD_ROLE(guildID: string, roleID: string) {
    return `/guilds/${guildID}/roles/${roleID}`;
  }

  /**
   * `/guilds/${guildID}/prune`
   * - GET
   * - POST
   */
  public static GUILD_PRUNE(guildID: string) {
    return `/guilds/${guildID}/prune`;
  }

  /**
   * `/guilds/${guildID}/regions`
   * - GET
   */
  public static GUILD_VOICE_REGIONS(guildID: string) {
    return `/guilds/${guildID}/regions`;
  }

  /**
   * `/guilds/${guildID}/invites`
   * - GET
   */
  public static GUILD_INVITES(guildID: string) {
    return `/guilds/${guildID}/invites`;
  }

  /**
   * `/guilds/${guildID}/integrations`
   * - GET
   * - POST
   */
  public static GUILD_INTEGRATIONS(guildID: string) {
    return `/guilds/${guildID}/integrations`;
  }

  /**
   * `/guilds/${guildID}/integrations/${integrationID}`
   * - PATCH
   * - DELETE
   */
  public static GUILD_INTEGRATION(guildID: string, integrationID: string) {
    return `/guilds/${guildID}/integrations/${integrationID}`;
  }

  /**
   * `/guilds/${guildID}/integrations/${integrationID}/sync`
   * - POST
   */
  public static GUILD_INTEGRATION_SYNC(guildID: string, integrationID: string) {
    return `/guilds/${guildID}/integrations/${integrationID}/sync`;
  }

  /**
   * `/guilds/${guildID}/widget`
   * - GET
   * - PATCH
   */
  public static GUILD_WIDGET(guildID: string) {
    return `/guilds/${guildID}/widget`;
  }

  /**
   * `/guilds/${guildID}/widget.png`
   * - GET
   */
  public static GUILD_WIDGET_IMAGE(guildID: string) {
    return `/guilds/${guildID}/widget.png`;
  }

  /**
   * `/guilds/${guildID}/vanity-url`
   * - GET
   */
  public static GUILD_VANITY_URL(guildID: string) {
    return `/guilds/${guildID}/vanity-url`;
  }

  /**
   * `/guilds/${guildID}/emojis/${emojiID}`
   * - GET
   * - PATCH
   * - DELETE
   */
  public static GUILD_EMOJI(guildID: string, emojiID: string) {
    return `/guilds/${guildID}/emojis/${emojiID}`;
  }

  /**
   * `/guilds/${guildID}/emojis`
   * - GET
   * - POST
   */
  public static GUILD_EMOJIS(guildID: string) {
    return `/guilds/${guildID}/emojis`;
  }
}
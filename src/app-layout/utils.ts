interface UserLike {
  name?: string | null;
  user_type?: string | { role?: string | null } | null;
}

const ROLE_LABELS: Record<string, string> = {
  admin: "role.admin",
  student: "role.student",
  tutor: "role.tutor",
  parent: "role.parent",
  default: "role.member",
};

export function getDisplayName(user?: UserLike | null): string {
  if (!user) return "Member";

  return user.name?.trim() || "Member";
}
export function getInitials(user?: UserLike | null) {
  const displayName = getDisplayName(user);
  if (!displayName || displayName === "User") return "U";

  const parts = displayName.split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const getRoleLabel = (user?: UserLike | null) => {
  const metadata = user?.user_type;

  if (!metadata) return ROLE_LABELS.default;

  let role: string | undefined;

  if (typeof metadata === "string") {
    role = metadata;
  } else if (typeof metadata === "object" && metadata !== null) {
    role = metadata.role ?? undefined;
  }

  const key = role?.toLowerCase() ?? "default";
  return ROLE_LABELS[key] ?? ROLE_LABELS.default;
};

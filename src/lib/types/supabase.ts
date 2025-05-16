export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      documents: {
        Row: {
          id: string;
          title: string;
          content: string;
          owner_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content?: string;
          owner_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          owner_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      document_versions: {
        Row: {
          id: string;
          document_id: string;
          content: string;
          created_at: string;
          created_by: string;
          version_number: number;
        };
        Insert: {
          id?: string;
          document_id: string;
          content: string;
          created_at?: string;
          created_by: string;
          version_number?: number;
        };
        Update: {
          id?: string;
          document_id?: string;
          content?: string;
          created_at?: string;
          created_by?: string;
          version_number?: number;
        };
      };
      document_permissions: {
        Row: {
          id: string;
          document_id: string;
          user_id: string;
          permission: "owner" | "editor" | "viewer";
          created_at: string;
        };
        Insert: {
          id?: string;
          document_id: string;
          user_id: string;
          permission: "owner" | "editor" | "viewer";
          created_at?: string;
        };
        Update: {
          id?: string;
          document_id?: string;
          user_id?: string;
          permission?: "owner" | "editor" | "viewer";
          created_at?: string;
        };
      };
      document_line_edits: {
        Row: {
          id: string;
          document_id: string;
          line_number: number;
          user_id: string;
          edited_at: string;
        };
        Insert: {
          id?: string;
          document_id: string;
          line_number: number;
          user_id: string;
          edited_at?: string;
        };
        Update: {
          id?: string;
          document_id?: string;
          line_number?: number;
          user_id?: string;
          edited_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          username: string;
          full_name: string;
          avatar_url: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username: string;
          full_name?: string;
          avatar_url?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string;
          full_name?: string;
          avatar_url?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

export type Document = Database["public"]["Tables"]["documents"]["Row"];
export type DocumentVersion =
  Database["public"]["Tables"]["document_versions"]["Row"];
export type DocumentPermission =
  Database["public"]["Tables"]["document_permissions"]["Row"];
export type DocumentLineEdit =
  Database["public"]["Tables"]["document_line_edits"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

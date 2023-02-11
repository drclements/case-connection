# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_10_031238) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "case_managers", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "phone"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "title"
    t.integer "credential_id"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "image"
    t.integer "age"
    t.string "gender"
    t.string "race"
    t.string "ethnicity"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "county"
    t.boolean "isActive"
    t.integer "funding_id"
    t.integer "treatment_plan_id"
    t.integer "mentor_id"
    t.integer "case_manager_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "fundings", force: :cascade do |t|
    t.string "name"
    t.string "county"
    t.string "funding_type"
    t.string "year"
    t.integer "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "images", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_data"
    t.integer "case_manager_id"
  end

  create_table "mentors", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.integer "phone"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "title"
    t.integer "credential_id"
    t.integer "case_manager_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "perception_of_cares", force: :cascade do |t|
    t.string "poc_one"
    t.string "poc_two"
    t.string "poc_three"
    t.string "poc_four"
    t.string "poc_five"
    t.string "poc_six"
    t.string "poc_seven"
    t.string "poc_eight"
    t.string "poc_nine"
    t.string "poc_ten"
    t.string "poc_eleven"
    t.string "poc_twelve"
    t.text "poc_additional_comments"
    t.string "length_of_service"
    t.string "date"
    t.string "firstname"
    t.string "lastname"
    t.integer "client_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "program_announcements", force: :cascade do |t|
    t.string "date"
    t.text "body"
    t.integer "case_manager_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "progress_notes", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "date_of_service"
    t.string "service_provided"
    t.string "location"
    t.integer "client_id"
    t.string "chart_id"
    t.integer "code_of_service"
    t.string "date_of_note"
    t.string "contact_type"
    t.integer "service_time"
    t.integer "travel_time"
    t.integer "documentation_time"
    t.integer "total_time"
    t.text "treatment_goals"
    t.text "session_focus"
    t.text "interventions"
    t.text "client_response"
    t.text "plan"
    t.string "staff_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sample_assessments", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "date"
    t.integer "client_id"
    t.integer "sa_one"
    t.integer "sa_two"
    t.integer "sa_three"
    t.integer "sa_four"
    t.integer "sa_five"
    t.integer "sa_total"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "treatment_plans", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "date"
    t.text "goals"
    t.text "specific_objective"
    t.text "interventions"
    t.text "strengths"
    t.text "barriers"
    t.integer "client_id"
    t.string "case_manager"
    t.string "date_of_completion"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end

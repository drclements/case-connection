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

ActiveRecord::Schema.define(version: 2023_02_02_101924) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "case_managers", force: :cascade do |t|
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

end

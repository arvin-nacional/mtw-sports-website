'use client'

import React, { useCallback, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm, FormProvider } from 'react-hook-form'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'
import type { ContactSectionBlock as ContactSectionBlockProps } from '@/payload-types'
import { Button } from '@/components/ui/button'
import RichText from '@/components/RichText'
import { fields } from '@/blocks/Form/fields'
import { getClientSideURL } from '@/utilities/getURL'

const iconMap = {
  MapPin,
  Phone,
  Mail,
  Clock,
}

const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    hoverBg: 'group-hover:bg-primary',
    hoverText: 'group-hover:text-white',
  },
  secondary: {
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    hoverBg: 'group-hover:bg-secondary',
    hoverText: 'group-hover:text-white',
  },
  tertiary: {
    bg: 'bg-tertiary/10',
    text: 'text-tertiary',
    hoverBg: 'group-hover:bg-tertiary',
    hoverText: 'group-hover:text-white',
  },
}

export const ContactSectionBlock: React.FC<ContactSectionBlockProps> = ({
  heading,
  contactItems,
  showWhyContactUs,
  whyContactUsHeading,
  whyContactUsItems,
  showScheduleMeeting,
  scheduleMeetingHeading,
  scheduleMeetingDescription,
  scheduleMeetingUrl,
  formHeading,
  formDescription,
  form: formFromProps,
  privacyText,
}) => {
  const form = formFromProps as FormType
  const {
    id: formID,
    confirmationMessage,
    confirmationType,
    redirect,
    submitButtonLabel,
    fields: formFields,
  } = form || {}

  const formMethods = useForm({
    defaultValues: formFields,
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()
          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)
            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })
            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect
            if (url) router.push(url)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white px-6 py-28 lg:px-12">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(91,184,254,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-secondary mb-4 text-xs font-bold uppercase tracking-[0.4em]">
            Contact Us
          </p>
          <h2 className="text-primary mb-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {heading}
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Items */}
            <div className="space-y-5">
              {contactItems?.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap]
                const colors = colorMap[item.iconColor as keyof typeof colorMap] || colorMap.primary

                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 rounded-xl border border-primary/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.bg} ${colors.text} transition-colors duration-300 ${colors.hoverBg} ${colors.hoverText}`}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <div>
                      <h3 className="text-primary mb-1 font-bold">{item.title}</h3>
                      <p className="text-on-surface-variant whitespace-pre-line text-sm leading-relaxed">
                        {item.linkUrl ? (
                          <a
                            href={item.linkUrl}
                            className="transition-colors hover:text-secondary"
                          >
                            {item.description}
                          </a>
                        ) : (
                          item.description
                        )}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Schedule Meeting Card */}
            {showScheduleMeeting && (
              <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-secondary/5 p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-secondary to-tertiary" />
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="text-primary text-lg font-bold">
                    {scheduleMeetingHeading || 'Schedule a Meeting'}
                  </h3>
                </div>
                {scheduleMeetingDescription && (
                  <p className="text-on-surface-variant mb-5 text-sm leading-relaxed">
                    {scheduleMeetingDescription}
                  </p>
                )}
                {scheduleMeetingUrl && (
                  <a
                    href={scheduleMeetingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Book a Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}

            {/* Why Contact Us Card */}
            {showWhyContactUs &&
              whyContactUsItems &&
              (whyContactUsItems as { color: string; text: string }[]).length > 0 && (
                <div className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm">
                  <h3 className="text-primary mb-4 text-lg font-bold">{whyContactUsHeading}</h3>
                  <ul className="space-y-3">
                    {(whyContactUsItems as { color: string; text: string }[]).map((item: { color: string; text: string }, index: number) => {
                      const bulletColor =
                        item.color === 'secondary'
                          ? 'text-secondary'
                          : item.color === 'tertiary'
                            ? 'text-tertiary'
                            : 'text-primary'
                      return (
                        <li key={index} className="flex items-start gap-3">
                          <span className={`${bulletColor} mt-1 text-lg font-bold`}>•</span>
                          <span className="text-on-surface-variant text-sm leading-relaxed">
                            {item.text}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-8 shadow-lg lg:p-10">
              {/* Gradient accent bar */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-secondary to-tertiary" />

              <h2 className="text-primary mb-3 text-2xl font-extrabold">{formHeading}</h2>
              {formDescription && (
                <p className="text-on-surface-variant mb-8 leading-relaxed">{formDescription}</p>
              )}

              <FormProvider {...formMethods}>
                {!isLoading && hasSubmitted && confirmationType === 'message' && (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                    <RichText data={confirmationMessage} enableGutter={false} />
                  </div>
                )}
                {isLoading && !hasSubmitted && (
                  <div className="flex items-center justify-center py-12">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
                  </div>
                )}
                {error && (
                  <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                    {`${error.status || '500'}: ${error.message || ''}`}
                  </div>
                )}
                {!hasSubmitted && form && (
                  <form id={formID} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {formFields?.map((field, index) => {
                      const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                      if (Field) {
                        return (
                          <div key={index}>
                            <Field
                              form={form}
                              {...field}
                              {...formMethods}
                              control={control}
                              errors={errors}
                              register={register}
                            />
                          </div>
                        )
                      }
                      return null
                    })}

                    <Button
                      form={formID}
                      type="submit"
                      size="lg"
                      className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
                    >
                      {submitButtonLabel || 'Send Message'}
                    </Button>

                    {privacyText && (
                      <p className="text-on-surface-variant/60 text-center text-xs">
                        {privacyText}
                      </p>
                    )}
                  </form>
                )}
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
